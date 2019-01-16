import { Component, OnInit, Input } from '@angular/core';
import { TimeEntry } from 'src/app/services/time-entry.service';

@Component({
  selector: 'app-time-entry-item',
  templateUrl: './time-entry-item.component.html',
  styleUrls: ['./time-entry-item.component.css']
})
export class TimeEntryItemComponent implements OnInit {

  @Input() aSingleTimeEntry : TimeEntry;

  constructor() { }

  ngOnInit() {
  }

}
