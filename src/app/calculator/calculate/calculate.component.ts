import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

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
export class CalculateComponent implements OnInit, OnDestroy, OnChanges {

  myValue = 0;
  myValue2 = 0;
  myResultValue = 0;
  sub: Subscription;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.sub = this.service.getUserAuth().subscribe(u => {
      console.log('Calc Sub', u);
    });
    // this.sub = this.service.getUserAuth().pipe(
    //   filter(u=>u.userName !== 'Scott'),
    //   take(2),
    //   map(u=>{
    //     console.log('Calc Sub',u);
    //   })).subscribe();
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
