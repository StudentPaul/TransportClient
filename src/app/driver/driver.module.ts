import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import {DriverRoutingModule} from './driver-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DriverRoutingModule
  ],
  declarations: [DriverComponent]
})
export class DriverModule { }
