import { Component } from '@angular/core';
import { Treeview } from './treeview';
import { Directory } from './directory';

@Component({
  template: `<h1>Recursive TreeView</h1><treeview [directories]="directories"></treeview>`
})

export class TreeviewDemo {
  directories: Array<Directory>;
  
  constructor(){
    this.loadDirectories();
  }
  
  loadDirectories(){
    const fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
    const summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
    const pics = new Directory('Pictures',[summer2014,fall2014],[]);

    const music = new Directory('Music',[],['song1.mp3','song2.mp3']);

    this.directories = [pics,music];
  }
}