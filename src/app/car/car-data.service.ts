import { Injectable } from '@angular/core';
import { ApiService } from '../api-mock.service';
import { Observable } from 'rxjs/Observable';
import {Car, CarEnums} from './car.classes';

@Injectable()
export class CarDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /cars
  addCar(car: Car): Observable<Car> {
    return this.api.createCar(car);
  }

  // Simulate DELETE /cars/:id
  deleteCarById(carId: number): Observable<Car> {
    return this.api.deleteCarById(carId);
  }

  // Simulate PUT /cars/:id
  updateCar(car: Car): Observable<Car> {
    return this.api.updateCar(car);
  }

  // Simulate GET /cars
  getAllCars(): Observable<Car[]> {
    return this.api.getAllCars();
  }

  // Simulate GET /cars/:id
  getCarById(carId: number): Observable<Car> {
    return this.api.getCarById(carId);
  }
  getCarEnums(): Observable<CarEnums> {
    return this.api.getCarEnums();
  }

}
