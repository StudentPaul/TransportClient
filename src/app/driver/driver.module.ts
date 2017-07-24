import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import {DriverRoutingModule} from './driver-routing.module';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DriverRoutingModule
  ],
  declarations: [DriverComponent]
})
export class DriverModule { }
