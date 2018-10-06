
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FriendsService} from './friends.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [AppComponent],
  providers: [FriendsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
