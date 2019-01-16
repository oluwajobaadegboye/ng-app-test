import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  userObj: User;
  sub: Subscription;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.user$ = this.service.getUserAuth();
    this.sub = this.user$.subscribe(userData => {
      console.log('Login Subscribed ', userData);
      this.userObj = userData;
    });
  }

  onLoginSubmit() {
    console.log('Submit', this.userObj);
    this.service.login(this.userObj);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();

    // tslint:disable-next-line:no-console
    console.info('unsubscribeddddddddd');
  }
}

export interface User {
  userName?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  isSuccess: boolean;
  isFailure: boolean;
}
