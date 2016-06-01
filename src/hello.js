import { Component} from 'angular2/core';

import { World} from 'worldtest';

@Component({
  directives: [World],
  selector: 'hello-test',
  template: `<p>new hello</p>
  <world-test>loading world ....</world-test>
  `
  })

export class Hello {

  }
