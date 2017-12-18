
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
    imports: [
      BrowserModule 
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {}

