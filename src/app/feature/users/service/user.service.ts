import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any>(`${environment.apiBaseUrl}/users`)
    .pipe(
        map(response => response.data)
    );
  }

  edit(user: User) {
    return this.http.put<User>(`${environment.apiBaseUrl}/users/${user.id}`, user);
  }
}
