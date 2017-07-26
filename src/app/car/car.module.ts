import { NgModule } from '@angular/core';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing.module';
import { CoreModule } from '../core/core.module';
import {CarListComponent} from './car-list/car-list.component';
import {CarDataService} from './car-data.service';
import {CarPanelComponent} from './car-panel/car-panel.component';
import {ApiService} from '../api-mock.service';
import {CarEditComponent} from './car-edit/car-edit.component';


@NgModule({
  imports: [
    CarRoutingModule,
    CoreModule
  ],
  declarations: [
    CarComponent,
    CarListComponent,
    CarPanelComponent,
    CarEditComponent
  ],
  providers: [
    CarDataService,
    ApiService
  ],
  bootstrap: [
    CarEditComponent
  ]
})
export class CarModule { }
