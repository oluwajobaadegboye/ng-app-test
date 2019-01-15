import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddDotZeroPipe } from './add-dot-zero.pipe';

@NgModule({
  declarations: [AddDotZeroPipe],
  exports: [AddDotZeroPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
