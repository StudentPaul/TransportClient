import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class CoreModule { }
