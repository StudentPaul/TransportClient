import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Driver} from "../driver.classes";
import {Subscription} from "rxjs";
import {DriverDataService} from "../driver-data.service";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {DriverEditComponent} from "../driver-edit/driver-edit.component";

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
    const config = new MdDialogConfig();
    const dialogRef = this.dialog.open(DriverEditComponent, config);
    dialogRef.componentInstance.driver = this.driver;
    dialogRef.componentInstance.snackBarOpened.subscribe(data => this.openSnackBar(data));
    dialogRef.afterClosed().subscribe(
      result => {
      }
    );
  }
  delete() {
    this.deleting = true;
    this.driverData.deleteDriverById(this.driver.id).subscribe(
      result => {
        this.deleting = false;
        this.unselectDriver.emit();
        this.openSnackBar('Запись удалена');
      },
      error => {
        this.deleting = false;
        this.openSnackBar(error);
      }
    );
  }
  openSnackBar(message: string) {
    this.snackBarOpened.emit(message);
  }
}
