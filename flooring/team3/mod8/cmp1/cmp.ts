
import {Component} from '@angular/core';
@Component({
    template: '<strong>5381</strong>',
})
export class Cmp5381Component {
  add5381(x: number) {
    return x + 5381;
  }
}