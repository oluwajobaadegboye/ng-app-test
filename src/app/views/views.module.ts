import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { TimeEntryViewComponent } from './time-entry-view/time-entry-view.component';
import { TimeEntryItemComponent } from './time-entry-view/time-entry-item/time-entry-item.component';

@NgModule({
  declarations: [LoginComponent, TimeEntryViewComponent, TimeEntryItemComponent],
  exports: [LoginComponent,TimeEntryViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class ViewsModule { }
