import { Component, NgModule, OnInit } from "@angular/core";
import { msg } from "../lib/file";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "hello-world-app",
  template: `
    <div>Hello {{ name }}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>

    <h3>Loaded from Java API:</h3>
    
    <div *ngFor="let car of cars">{{car}}</div>
  `,
  styleUrls: ["./hello-world-styles.css"]
})
export class HelloWorldComponent implements OnInit {
  name: string = msg;

  cars = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http
      .request("/cars")
      .map(res => res.json())
      .subscribe(res => {
        this.cars = res;
      });
  }
}
