import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../car.classes';
import {CarDataService} from '../car-data.service';
import {Subscription} from "rxjs";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {CarEditComponent} from "../car-edit/car-edit.component";

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.sass']
})
export class CarPanelComponent implements OnInit {

  car: Car;
  carSubscriber: Subscription;
  deleting = false;
  @Output() snackBarOpened: EventEmitter<string> = new EventEmitter();
  @Output() unselectCar: EventEmitter<null> = new EventEmitter();
  @Input() set selectedCarId(value: number) {
    if (this.carSubscriber) {
      this.carSubscriber.unsubscribe();
    }
    this.carSubscriber = this.carData.getCarById(value).subscribe(car => {
        this.car = car;
      },
      error => {});
  }

  constructor(private carData: CarDataService, public dialog: MdDialog) { }

  ngOnInit() {}
  openEditDialog() {
    const config = new MdDialogConfig();
    const dialogRef = this.dialog.open(CarEditComponent, config);
    dialogRef.componentInstance.car = this.car;
    dialogRef.componentInstance.snackBarOpened.subscribe(data => this.openSnackBar(data));
    dialogRef.afterClosed().subscribe(
      result => {}
    );
  }
  delete() {
    this.deleting = true;
    this.carData.deleteCarById(this.car.id).subscribe(
      result => {
        this.deleting = false;
        this.unselectCar.emit();
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
