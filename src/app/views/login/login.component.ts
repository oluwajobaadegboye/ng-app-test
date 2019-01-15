import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  userObj : User;
  sub : Subscription;

  constructor(private service: AuthService) { }

  ngOnInit() {
    const user$ = this.service.getUserAuth();
    this.sub = user$.subscribe(userData=>{
      console.log('Login Subscribed ',userData);
      this.userObj = userData;
    })
  }

  onLoginSubmit(){
    console.log('Submit',this.userObj);
    this.service.login(this.userObj);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

export interface User{
  userName?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}
