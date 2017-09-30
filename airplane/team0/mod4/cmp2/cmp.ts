
import {Component} from '@angular/core';
@Component({
    template: '<strong>42</strong>',
})
export class Cmp42Component {
  add42(x: number) {
    return x + 42;
  }
}