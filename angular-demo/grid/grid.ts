import { Component, Input } from '@angular/core';
import { Column } from './column';
import { Sorter } from './sorter';

@Component({
  selector: 'grid',
  templateUrl: './grid.html'
})

export class Grid implements OnInit{

  @Input() columns:Array<Column>;
  @Input() rows:Array<any>;
  
  @Input() name:string;
  
  sorter = new Sorter();
  
  sort(key: string){
    this.sorter.sort(key, this.rows);
  }
  
}
