import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {first, map, take,filter} from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit,OnDestroy {

  myValue :number = 0 ;
  myValue2:number = 0 ;
  myResultValue = 0;
  sub : Subscription;

  constructor(private service: AuthService) { }

  ngOnInit() {
    // this.service.getUserAuth().subscribe(u=>{
    //   console.log('Calc Sub',u);
    // });
    this.sub = this.service.getUserAuth().pipe(
      filter(u=>u.userName !== 'Scott'),
      take(2),
      map(u=>{
        console.log('Calc Sub',u);
      })).subscribe();
  }

  onAdd($result : number){
    console.log("OnAdd ",$result);
    this.myResultValue= $result;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
