import { Component } from '@angular/core';
import { Insertion } from './insertion-sort';
import { ValList, ListItem } from './value-list';
@Component({
    selector: 'insertion-sort',
    inputs: ['list: list'],
    styleUrls: ['insertion-sort.component.css'],
    template: `
    <h2>Insertion Sort</h2>
    <table class="sort">
    <tr>
        <td *ngFor="let item of list.items" [ngClass]="item.getClass()">
            <span>{{item.val}}</span>
        </td>
    </tr>
    </table>
    <div style="margin-top: 10px;">
        <button (click)="sortList()">Sort list</button>
    </div>`
})

export class InsertionSortComponent {

    list:ValList;

    constructor(){
        this.list = new ValList();
        this.list.items = [
            new ListItem(5),
            new ListItem(33),
            new ListItem(5),
            new ListItem(5),
            new ListItem(2),
            new ListItem(-2),
            new ListItem(4),
            new ListItem(88),
            new ListItem(6),
            new ListItem(400),
            new ListItem(1),
            new ListItem(58),
            new ListItem(30)
        ];

    }

    sortList(){
        Insertion.sort(this.list)
    }
}

