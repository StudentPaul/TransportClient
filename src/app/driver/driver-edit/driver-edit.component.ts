import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Driver} from '../driver.classes';
import {MdDialogRef, MdSnackBar} from '@angular/material';
import {DriverDataService} from '../driver-data.service';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.sass']
})
export class DriverEditComponent implements OnInit {
  driver: Driver;
  saving = false;
  @Output() snackBarOpened: EventEmitter<string> = new EventEmitter();
  constructor(public dialogRef: MdDialogRef<DriverEditComponent>, private driverData: DriverDataService, private snackBar: MdSnackBar) { }

  ngOnInit() {
  }
  save() {
    this.saving = true;
    this.driverData.updateDriver(this.driver).subscribe(
      driver => {
        this.driver = driver;
        this.saving = false;
        this.openSnackBar('Запись сохранена');
      },
      error => {
        this.saving = false;
        this.openSnackBar(error);
      },
    );
  }
  openSnackBar(message: string) {
    this.snackBarOpened.emit(message);
  }
}
