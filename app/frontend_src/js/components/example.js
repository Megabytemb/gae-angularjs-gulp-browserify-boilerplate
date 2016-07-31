function ExampleComponentController() {
	
}

var ExampleComponent = {

    templateUrl: 'components/example.html',
    controller: ExampleComponentController,
	bindings: {
	    title: '@'
	  }
};

export default {
  name: 'exampleComponent',
  fn: ExampleComponent
};
