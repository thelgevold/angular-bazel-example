
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app',
  template: `
             <div class="container">
               <h1>Angular Demo</h1>
               <div class="list-group col-md-3">
                 <a [class.active]="getLinkStyle('/grid')" [routerLink]="['/grid']" class="list-group-item">Data Grid</a>
                 <a [class.active]="getLinkStyle('/team')" [routerLink]="['/team']" class="list-group-item">Team</a>
               </div>
               <div class="col-md-9">
                 <router-outlet></router-outlet>
               </div>
            </div>`,
})

export class AppComponent {
  location:Location;
  
  constructor(location:Location) {
    this.location = location;
  }

  getLinkStyle(path: string) {
    return this.location.path().indexOf(path) > -1;
  }
}