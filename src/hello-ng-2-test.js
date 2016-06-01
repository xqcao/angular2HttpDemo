import { Component, View} from 'angular2/core';

@Component({
  selector: 'hello-ng-2-test',
  template: '<h1>http demo :</h1>'
  })

// @View({
  //   templateUrl: 'hello-ng-2-test.html'
  // })

export class HelloNg2Test {

    constructor() {
      console.info('HelloNg2Test Component Mounted Successfully');
    }

  }
