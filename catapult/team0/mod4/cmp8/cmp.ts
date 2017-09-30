
import {Component} from '@angular/core';
@Component({
    template: '<strong>2048</strong>',
})
export class Cmp2048Component {
  add2048(x: number) {
    return x + 2048;
  }
}