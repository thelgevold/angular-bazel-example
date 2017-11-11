
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {}

