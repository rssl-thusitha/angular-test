import { Injectable } from '@angular/core';
import { User } from '../model/User';
// Update everytime variable changes
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  protected userList: User[] = [
    {
      id: 1,
      username: 'thusitha',
      password: '123',
      type: 'admin',
    },
    {
      id: 2,
      username: 'chamil',
      password: '456',
      type: 'user',
    },
    {
      id: 3,
      username: 'chavidu',
      password: '789',
      type: 'user',
    },
  ];

  protected loggedUserSubject= new BehaviorSubject<User|undefined>(undefined);
  loggedUser$ = this.loggedUserSubject.asObservable();

  constructor() {}

  login(username: String, password: String): User | undefined {
    for (const user of this.userList) {
      if (user.username == username && user.password == password) {
        this.loggedUserSubject.next(user);
        return user;
      }
    }
    return undefined;
  }
}
