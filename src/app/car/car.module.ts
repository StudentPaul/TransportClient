import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule
  ],
  declarations: [
    CarComponent
  ]
})
export class CarModule { }
