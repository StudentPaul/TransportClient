import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarModule} from './car/car.module';
import {DriverModule} from './driver/driver.module';

const routes: Routes = [
  { path: '', redirectTo: 'drivers', pathMatch: 'full'},
  { path: 'cars',  loadChildren: 'app/car/car.module#CarModule' },
  { path: 'drivers',  loadChildren: 'app/driver/driver.module#DriverModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
