import {Component} from '@angular/core';
import {Treeview} from './treeview.component';
import {Directory} from './directory';

@Component({
  selector: 'treeview-demo',
  template: '<h2>Media Collection</h2><treeview [directories]="directories"></treeview>'
})

export class TreeviewDemo {
    directories: Array<Directory>;

    constructor(){
      this.loadDirectories();
    }

    loadDirectories(){
      const action = new Directory('Action',[],['Terminator','Rambo','Top Gun', 'Indiana Jones']);
      const drama = new Directory('Drama',[],['The Godfather','Manchester by the Sea','Gone With the Wind']);
      const comedy = new Directory('Comedy',[],['The Hangover','Wedding Crashers','The Internship']);
      const pics = new Directory('Movies',[drama, action, comedy], []);

      const music = new Directory('Music Albums',[],['Thriller - Michael Jackson','Rumours - Fleetwood Mac']);

      this.directories = [pics,music];
    }
}
