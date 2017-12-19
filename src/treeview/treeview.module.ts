import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Treeview} from './treeview.component';
import {TreeviewDemo} from './treeview-demo.component'

@NgModule({
  imports: [CommonModule],
  declarations: [Treeview, TreeviewDemo],
  exports: [Treeview, TreeviewDemo]
})
export class TreeviewModule {}
