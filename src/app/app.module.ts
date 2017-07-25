import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DriverModule } from './driver/driver.module';
import { CarModule } from './car/car.module';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule.forRoot(),
    DriverModule,
    CarModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
