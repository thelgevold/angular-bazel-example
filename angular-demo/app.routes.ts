import { Routes, RouterModule }  from '@angular/router';

import { GridDemo } from './grid/grid-demo';
import { TreeviewDemo } from './treeview/treeview-demo';
import { Editor } from './editor/editor';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { Spreadsheet } from './spreadsheet/spreadsheet';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/sort',
    pathMatch: 'full'
  },
  { path: 'editor', component: Editor},
  { path: 'treeview', component: TreeviewDemo },
  { path: 'grid', component: GridDemo },
  { path: 'spreadsheet', component: Spreadsheet },
  { path: 'sort', component: InsertionSortComponent }
];
