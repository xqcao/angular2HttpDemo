import { Component, Injectable} from 'angular2/core';

import { Http} from 'angular2/http';

@Component({
  selector: 'world-test',
  template: `<p>3 tag here:</p>
  <button (click) ="showAll()">show list</button>
  <ul>
    <li *ngFor="#item of names">{{item.name}}<a href="{{item.html_url}}">{{item.url}}</a></li>
  </ul>
  `
  })

@Injectable()
export class World {
    repos: any;
    constructor(http: Http) {
      //console.log("this http :" + http);
      http.get('https://api.github.com/users/xqcao/repos').subscribe(res => this.repos = res.json());
    }
    showAll() {
      this.names = this.repos;
    }

  }
