import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() myLeft:number;
  @Input() myRight: number;

  @Output()  result = new  EventEmitter<number>();

  constructor() { 
    console.log('constructor',this.myLeft)
  }

  ngOnInit() {
    console.log('OnInit ', this.myLeft);
  }

  onClick():void{
    console.log('OnClick ',this.myLeft);
    const total = Number(this.myLeft) + Number(this.myRight);
    this.result.next(total);
  }
}