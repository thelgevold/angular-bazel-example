import {HelloWorldModule} from './hello-world/hello-world.module';
import {AppComponent} from './app.component';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TreeviewModule} from './treeview/treeview.module';

@NgModule({
  imports: [BrowserModule, HelloWorldModule, TreeviewModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
