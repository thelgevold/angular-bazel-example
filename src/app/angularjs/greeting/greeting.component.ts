/// <reference types="angular" />

export class GreetingComponent implements ng.IComponentOptions {
  controller = GreetingController;
  controllerAs = 'vm';
  template = '<h1>{{ vm.greeting }}</h1> <hello-world></hello-world> ';
}

export class GreetingController {
  greeting = 'Hello World';
}
