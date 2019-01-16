import { Injectable } from '@angular/core';
import { User } from '../views/login/login.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  readonly api = environment.loginUri;
  private userAuth: BehaviorSubject<User>;
  private readonly userAuth$: Observable<User>;

  constructor(private http: HttpClient) {
    const initUser = JSON.parse(localStorage.getItem('userStuff')) || { isFailure: false, isSuccess: false };
    console.log('initUser', initUser);
    this.userAuth = new BehaviorSubject<User>(initUser);
    this.userAuth$ = this.userAuth.asObservable();
  }

  public login(user: User): void {
    console.log('Service Login', user);
    this.http.get<User>(`${this.api}?userName=${user.userName}&password=${user.password}`)
      .toPromise()
      .then(userMessage => {
        const us = { ...userMessage, isSuccess: true, isFailure: false };
        localStorage.setItem('userStuff', JSON.stringify(us));
        this.userAuth.next(
          us
        );
      })
      .catch(() => {
        this.userAuth.next(
          { userName: '', password: '', isFailure: true, isSuccess: false }
        );
      });

  }

  public getUserAuth(): Observable<User> {
    return this.userAuth$;
  }
}
