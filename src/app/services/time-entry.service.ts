import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Time } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class TimeEntryService {

  private readonly api = environment.timeEntryUri;
  private timeEntries: BehaviorSubject<TimeEntry[]>;
  private readonly timeEntries$: Observable<TimeEntry[]>;

  constructor(private http: HttpClient) {
    this.timeEntries = new BehaviorSubject<TimeEntry[]>([]);
    this.timeEntries$ = this.timeEntries.asObservable();
  }

  loadTimeEntries(userName: string): void {
    this.http.get<TimeEntry[]>(
      `${this.api}getTimeEntry?userName=${userName}`
    ).toPromise()
      .then(listOfTimeEntries => {
        this.timeEntries.next(listOfTimeEntries);
      })
      .catch(e => {
        console.log('loadTimeEntries ', e);
      });
  }
  
  getTimeEntries() : Observable<TimeEntry[]>{
    return this.timeEntries$;
  }

}


export interface TimeEntry {
  userName: string;
  dateOfTime: string;
  hours: number;
  timeEntryId: string;
}