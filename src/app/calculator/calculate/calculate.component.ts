import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculate',
  template: `
      <input type="text" id="left" [value]="myValue" (input) ="onChangeValue($event.target.value)">
      <input type="text" id="right" [value]="myValue2" (input) ="onChangeValue2($event.target.value)">

      <app-add [myLeft]="myValue" [myRight]="myValue2" (result)="onAdd($event)"></app-add>

          <h3>Add Result : {{myResultValue}}</h3>
  `,
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit, OnChanges {

  myValue = 0 ;
  myValue2 = 0 ;
  myResultValue = 0 ;

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(change: any) {
  //   console.log('changes in calculate component is ', change);
  //   console.log('myValue in calculate component is ', this.myValue, 'myValue2 is ', this.myValue2);
  // }

  onChangeValue($val: number) {
    this.myValue = $val;
  }

  onChangeValue2($val: number) {
    this.myValue2 = $val;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CALCULATE COMP', changes);
  }

  onAdd($result: number) {
    console.log('OnAdd ', $result);
    this.myResultValue = $result;
  }

}
