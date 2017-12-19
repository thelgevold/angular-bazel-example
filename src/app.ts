
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TreeviewModule} from './treeview/treeview.module';

@Component({
  selector: 'app-component',
  template: '<treeview-demo></treeview-demo>'
})
export class BootstrapComponent {}

@NgModule({
  imports: [BrowserModule, TreeviewModule],
  declarations: [BootstrapComponent],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
