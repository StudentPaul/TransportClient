import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdDialogRef, MdSnackBar} from '@angular/material';
import {Car, CarEnums} from '../car.classes';
import {CarDataService} from "../car-data.service";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.sass']
})
export class CarEditComponent implements OnInit {

  car: Car;
  constructor(public dialogRef: MdDialogRef<CarEditComponent>, private carData: CarDataService, private snackBar: MdSnackBar) { }
  carEnums: CarEnums;
  saving = false;
  @Output() snackBarOpened: EventEmitter<string> = new EventEmitter();
  getModels(manufacturer: string) {
    return this.carEnums.manufacturers.find(item => item.name === manufacturer ).models;
  }

  ngOnInit() {
    this.carData.getCarEnums().subscribe(
      enums => {
        this.carEnums = enums;
      },
      error => {});
  }
  save() {
    this.saving = true;
    this.carData.updateCar(this.car).subscribe(
      car => {
        this.car = car;
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
