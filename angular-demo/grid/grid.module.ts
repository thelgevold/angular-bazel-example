import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridDemo } from './grid-demo';
import { Grid } from './grid';

@NgModule({
  imports: [CommonModule],
  declarations: [GridDemo, Grid],
  exports: [GridDemo]
})
export class GridModule {}