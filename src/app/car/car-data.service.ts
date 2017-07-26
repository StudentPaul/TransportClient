import { Injectable } from '@angular/core';
import { ApiService } from '../api-mock.service';
import { Observable } from 'rxjs/Observable';
import {Car, CarEnums} from './car.classes';

@Injectable()
export class CarDataService {

  constructor(private api: ApiService) {}

  addCar(car: Car): Observable<Car> {
    return this.api.createCar(car);
  }
  deleteCarById(carId: number): Observable<Car> {
    return this.api.deleteCarById(carId);
  }
  updateCar(car: Car): Observable<Car> {
    return this.api.updateCar(car);
  }
  getAllCars(): Observable<Car[]> {
    return this.api.getAllCars();
  }
  getCarById(carId: number): Observable<Car> {
    return this.api.getCarById(carId);
  }
  getCarEnums(): Observable<CarEnums> {
    return this.api.getCarEnums();
  }

}
