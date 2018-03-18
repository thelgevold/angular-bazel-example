import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

import {HelloWorldComponent} from './hello-world.component';


@NgModule({
  imports: [HttpModule, CommonModule],
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {}