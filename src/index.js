import { Component, View} from 'angular2/core';
import { bootstrap} from 'angular2/platform/browser';
import { HelloNg2Test} from 'hello-ng-2-test';
import { HTTP_PROVIDERS} from 'angular2/http';
import { Hello} from 'hello';

@Component({
  selector: 'main'
  })

@View({
  directives: [HelloNg2Test, Hello],
  template: `
    <hello-ng-2-test></hello-ng-2-test>
    <hello-test></hello-test>
  `
})

class Main {

  }

  bootstrap(Main, [HTTP_PROVIDERS]);
