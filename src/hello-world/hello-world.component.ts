import {Component, NgModule, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {msg} from '../lib/file';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'hello-world-app',
  template: `
    <h1>{{headline | async}}</h1>
    <div>{{name}}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
  `,
  styleUrls: ['./hello-world-styles.css']
})
export class HelloWorldComponent implements OnInit {
  name = "Hello";
  headline: Observable<string>;

  constructor(private http: Http) {}

  ngOnInit() {
    this.headline = this.http.get('http://localhost:9000/hello-world')
                         .map(res => res.json());
  }
}
