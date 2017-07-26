import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import {DriverRoutingModule} from './driver-routing.module';
import {CoreModule} from "../core/core.module";
import {DriverListComponent} from "./driver-list/driver-list.component";
import {DriverEditComponent} from "./driver-edit/driver-edit.component";
import {DriverPanelComponent} from "./driver-panel/driver-panel.component";
import {DriverDataService} from "./driver-data.service";
import {ApiService} from "../api-mock.service";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DriverRoutingModule
  ],
  declarations: [
    DriverComponent,
    DriverListComponent,
    DriverPanelComponent
  ],
  providers: [
    DriverDataService,
    ApiService
  ]
})
export class DriverModule { }
