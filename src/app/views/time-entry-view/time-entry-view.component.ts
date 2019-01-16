import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeEntryService, TimeEntry } from 'src/app/services/time-entry.service';
import {map, filter} from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'app-time-entry-view',
  templateUrl: './time-entry-view.component.html',
  styleUrls: ['./time-entry-view.component.css']
})
export class TimeEntryViewComponent implements OnInit,OnDestroy {

  sub: Subscription;
  anotherSub:Subscription;
  timeEntries: TimeEntry[];

  constructor(private service: TimeEntryService, private authService:AuthService) {
    
   }

  ngOnInit() {
    this.sub = this.service.getTimeEntries().pipe(
      map(entries => {
        this.timeEntries = entries;
      })
    ).subscribe();

    this.anotherSub =this.authService.getUserAuth().pipe(
      filter(user => user.userName && user.userName.length>0),
      map(user => {
        this.service.loadTimeEntries(user.userName);
      })
    ).subscribe();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.anotherSub.unsubscribe();
  }


}
