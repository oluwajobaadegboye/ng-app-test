import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { PipesModule } from './pipes/pipes.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ViewsModule } from './views/views.module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ServicesModule } from './services/services.module';
import { TimeEntryViewComponent } from './views/time-entry-view/time-entry-view.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'times',component: TimeEntryViewComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CalculatorModule,
    PipesModule,
    ViewsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
