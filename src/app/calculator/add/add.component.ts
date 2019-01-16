import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add',
  template: `
      <button (click)="onClick()">Add</button>
      `,
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnChanges {

  @Input() myLeft: number;
  @Input() myRight: number;

  @Output()  result = new  EventEmitter<number>();

  constructor() {
    console.log('constructor', this.myLeft);
  }

  ngOnInit() {
    console.log('OnInit ', this.myLeft);
  }

  // ngOnChanges(changes: any) {
  //   console.log('changes in Add Component is ', changes);
  //   console.log('Left is ', this.myLeft, ' and Right ', this.myRight);
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ADD COMP', changes);
  }

  onClick(): void {
    console.log('OnClick ', this.myLeft);
    const total = Number(this.myLeft) + Number(this.myRight);
    this.result.next(total);
  }
}
