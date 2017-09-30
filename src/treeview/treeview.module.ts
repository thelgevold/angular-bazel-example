import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TreeViewComponent} from './treeview.component';
import {TreeviewDemoComponent} from './treeview-demo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TreeviewDemoComponent, TreeViewComponent],
  exports: [TreeviewDemoComponent]
})
export class TreeviewModule {
}