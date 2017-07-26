import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Driver} from "../driver.classes";
import {Subscription} from "rxjs";
import {DriverDataService} from "../driver-data.service";
import {MdDialog, MdDialogConfig} from "@angular/material";

@Component({
  selector: 'app-driver-panel',
  templateUrl: './driver-panel.component.html',
  styleUrls: ['./driver-panel.component.sass']
})
export class DriverPanelComponent implements OnInit {
  driver: Driver;
  driverSubscriber: Subscription;
  deleting = false;
  @Output() snackBarOpened: EventEmitter<string> = new EventEmitter();
  @Output() unselectDriver: EventEmitter<null> = new EventEmitter();
  @Input() set selectedDriverId(value: number) {
    if (this.driverSubscriber) {
      this.driverSubscriber.unsubscribe();
    }
    this.driverSubscriber = this.driverData.getDriverById(value).subscribe(driver => {
        this.driver = driver;
      },
      error => {});
  }
  constructor(private driverData: DriverDataService, public dialog: MdDialog) { }

  ngOnInit() {
  }
  openEditDialog() {
  }
  delete() {
  }

}
