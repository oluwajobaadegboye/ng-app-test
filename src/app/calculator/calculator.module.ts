import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [CalculateComponent, AddComponent],
  exports: [CalculateComponent],
  imports: [
    CommonModule
  ]
})
export class CalculatorModule { }
