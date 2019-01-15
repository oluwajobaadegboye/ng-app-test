import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';
import { AddComponent } from './add/add.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [CalculateComponent, AddComponent],
  exports:[CalculateComponent],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class CalculatorModule { }
