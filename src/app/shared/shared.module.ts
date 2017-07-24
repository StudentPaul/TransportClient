import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from './shared.service';
import {AppModule} from "../app.module";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  ],
  declarations: []
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ SharedService ]
    };
  }
}
