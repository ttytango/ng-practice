import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, take, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];

  subject: Subject<any> = new Subject();
  obs: Observable<any> = this.subject.asObservable();
  url: string = environment.url;

  constructor(private http: HttpClient) { }

  // Only gets a specific default user
  public getUser(id: string = 'neo3d2m') {
    return this.http.get<User[]>(this.url + 'users'+ `/${id}`)
      .pipe(
        take(1),
        map(response => {
            return this.users = response
          }
        )
      )
  }


}
