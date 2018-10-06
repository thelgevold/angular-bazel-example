import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class FriendsService {
  constructor(private http: HttpClient) {}

  getFriends(): any  {
    return this.http.get('http://localhost:3000/api/friends');
  }
}