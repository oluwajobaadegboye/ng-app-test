import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-entry-login',
  templateUrl: './time-entry-login.component.html',
  styleUrls: ['./time-entry-login.component.css']
})
export class TimeEntryLoginComponent implements OnInit {

  myStuff = '';
  myOtherStuff = 'other stuff';


  constructor() { }

  ngOnInit() {
    this.myStuff = `and this is my ${this.myOtherStuff}`;
  }

}
