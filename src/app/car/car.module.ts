import { NgModule } from '@angular/core';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing.module';
import { CoreModule } from '../core/core.module';




@NgModule({
  imports: [
    CarRoutingModule,
    CoreModule
  ],
  declarations: [
    CarComponent
  ],
  providers: [

  ]
})
export class CarModule { }
