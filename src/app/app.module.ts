import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { NgxRouteInfoModule } from 'ngx-route-info';

const routes: Routes = [
  { path: 'test/:brand/:color', component: CarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxRouteInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
