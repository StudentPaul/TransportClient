import { NgModule } from '@angular/core';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing.module';
import { CoreModule } from '../core/core.module';
import {CarListComponent} from './car-list/car-list.component';
import {CarDataService} from './car-data.service';
import {CarPanelComponent} from './car-panel/car-panel.component';
import {ApiService} from '../api-mock.service';


@NgModule({
  imports: [
    CarRoutingModule,
    CoreModule
  ],
  declarations: [
    CarComponent,
    CarListComponent,
    CarPanelComponent
  ],
  providers: [
    CarDataService,
    ApiService
  ]
})
export class CarModule { }
