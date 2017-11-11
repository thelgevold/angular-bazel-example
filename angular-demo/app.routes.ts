import { Routes, RouterModule }  from '@angular/router';

import { GridDemo } from './grid/grid-demo';
import { TreeviewDemo } from './treeview/treeview-demo';
import { Editor } from './editor/editor';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/grid',
    pathMatch: 'full'
  },
    // { path: 'spreadsheet', component: Spreadsheet},
    // { path: 'jquery', component: JqueryIntegration},
    // { path: 'react', component:Angular2Host},
    // { path: 'algorithms', component:Algorithms},
    // { path: 'graph', component:Graph},
    // { path: 'pub-sub', component:PubSub},
  { path: 'editor', component: Editor},
    // { path: 'address', component:AddressBook},
    // { path: 'http', component:HttpSample},
  { path: 'treeview', component: TreeviewDemo },
  { path: 'grid', component: GridDemo }
    // { path: 'input', component:InputControls},
    // { path: 'contact', component:ContactList},
    // { path: 'textbox', component:BoundTextbox},
    // { path: 'non-bindable', component:IgnoreBindings},
    // { path: 'form', component:AddressForm},
    // { path: 'change', component:CommentDemo},
    // { path: 'parent-child', component:Parent},
    // { path: 'survey', component:SurveyDemo},
    // { path: 'redux', component:LogDemo},
    // { path: 'iodemo', component:InputOutputDemo},
    // { path: 'rxjs', component:RxJsStreams},
    // { path: 'friends', component:CachingDemo},
    // { path: 'buffering', component:RxJsBuffering},
    // { path: 'countries', component:CountryDemo},
    // { path: 'cars', component:CarsComponent}
];
