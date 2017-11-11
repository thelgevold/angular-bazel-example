import { Component, Input } from '@angular/core';
import { Directory } from './directory';

@Component({
    selector: 'treeview',
    styleUrls: ['./treeview.css'],
    template: `
    <ul>
    <li *ngFor="let dir of directories">

        <span class="iconButton" (click)="dir.toggle()">{{dir.getIcon()}}</span><input type="checkbox" [checked]="dir.checked" (click)="dir.check()" /> {{ dir.name }}

        <div *ngIf="dir.expanded">

            <ul>
                <li *ngFor="let file of dir.files">{{file}}</li>
            </ul>

            <treeview [directories]="dir.directories"></treeview>

        </div>

    </li>
    </ul>
    `
})

export class Treeview {
  @Input() directories: Array<Directory>;
}