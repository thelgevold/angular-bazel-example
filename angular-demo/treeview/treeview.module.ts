import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeviewDemo } from './treeview-demo';
import { Treeview } from './treeview';

@NgModule({
  imports: [CommonModule],
  declarations: [Treeview, TreeviewDemo],
  exports: [TreeviewDemo]
})
export class GridModule {}