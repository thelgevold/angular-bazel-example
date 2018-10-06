import {Component} from '@angular/core';
import {FriendsService} from './friends.service';
import {Observable} from 'rxjs';

@Component({selector: 'app-component', templateUrl: 'app.component.html'})
export class AppComponent {
  constructor(private friendsService: FriendsService) {}
  friends: Observable<Array<string>>
  ngOnInit() {
    this.friends = this.friendsService.getFriends();
  }
}
