from flask import Flask, jsonify, json, session, current_app
from oauth2client.contrib.flask_util import UserOAuth2

import logging
    
app = Flask(__name__)
app.config['SECRET_KEY'] = 'RandomAss2.0Key'
app.config['STATIC_FOLDER'] = 'static/'
app.debug=True

def set_profile(credentials):
    """
    Makes an HTTP request to the Google+ API to retrieve the user's basic
    profile information, including full name and photo, and stores it in the
    Flask session.
    """
    http = oauth2.http()
    resp, content = http.request(
        'https://www.googleapis.com/plus/v1/people/me/openIdConnect')
    session["profile"] = json.loads(content.decode('utf-8'))
    
        
def check_domain(fn):
    def wrapped():
        if session["profile"]["hd"] == "lafargeholcim.com":
            return fn()
        else:
            return "Access Denied"
    return wrapped
 
#oauth2 = UserOAuth2(app,
#    client_secrets_file='client_secrets.json',
#    scopes=[
#        "email"
#    ],
#    authorize_callback=set_profile)

# The Key is to have access_type='online', this means you don't ask for a refresh token
@app.route('/<path:p>')
#@oauth2.required(access_type='online')
#@check_domain
def ui(p):
    return app.send_static_file('index.html')
    
@app.route('/')
#@oauth2.required(access_type='online')
#@check_domain
def index():
    return open("static/index.html").read()

@app.route('/logout')
def logout():
    # Delete the user's profile and the credentials stored by oauth2.
    del session['profile']
    session.modified = True
    oauth2.storage.delete()
    return redirect(request.referrer or '/')

if __name__ == "__main__":
    app.run(debug=True, port=5003)