import { Component, NgModule, OnInit } from "@angular/core";
import { msg } from "../lib/file";
import { Jsonp } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "hello-world-app",
  template: `
    <div>Hello {{ name }}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
    <div *ngFor="let car of cars">{{car}}</div>
  `,
  styleUrls: ["./hello-world-styles.css"]
})
export class HelloWorldComponent implements OnInit {
  name: string = msg;

  cars = [];

  constructor(private http: Jsonp) {}

  ngOnInit() {
    this.http
      .request("http://localhost:8080/cars?callback=JSONP_CALLBACK")
      .map(res => res.json())
      .subscribe(res => {
        this.cars = res;
      });
  }
}
