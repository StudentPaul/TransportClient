import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Car, CarEnums} from './car/car.classes';
import { Driver } from './driver/driver.classes';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllCars(): Observable<Car[]> {
    return this.http
      .get(API_URL + '/cars')
      .map(response => {
        const cars = response.json();
        return cars.map((todo) => new Car(todo));
      })
      .catch(this.handleError);
  }

  public createCar(todo: Car): Observable<Car> {
    return this.http
      .post(API_URL + '/cars', todo)
      .map(response => {
        return new Car(response.json());
      })
      .catch(this.handleError);
  }

  public getCarById(todoId: number): Observable<Car> {
    return this.http
      .get(API_URL + '/cars/' + todoId)
      .map(response => {
        return new Car(response.json());
      })
      .catch(this.handleError);
  }

  public updateCar(todo: Car): Observable<Car> {
    return this.http
      .put(API_URL + '/cars/' + todo.id, todo)
      .map(response => {
        return new Car(response.json());
      })
      .catch(this.handleError);
  }

  public deleteCarById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/cars/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }
  public getCarEnums(): Observable<CarEnums> {
    return this.http
      .get(API_URL + '/car-enums')
      .map(response => {
        return new CarEnums(response.json());
      })
      .catch(this.handleError);
  }
  public getAllDrivers(): Observable<Driver[]> {
    return this.http
      .get(API_URL + '/drivers')
      .map(response => {
        const drivers = response.json();
        return drivers.map((driver) => new Driver(driver));
      })
      .catch(this.handleError);
  }

  public createDriver(driver: Driver): Observable<Driver> {
    return this.http
      .post(API_URL + '/drivers', driver)
      .map(response => {
        return new Driver(response.json());
      })
      .catch(this.handleError);
  }

  public getDriverById(driverId: number): Observable<Driver> {
    return this.http
      .get(API_URL + '/drivers/' + driverId)
      .map(response => {
        return new Driver(response.json());
      })
      .catch(this.handleError);
  }

  public updateDriver(driver: Driver): Observable<Driver> {
    return this.http
      .put(API_URL + '/drivers/' + driver.id, driver)
      .map(response => {
        return new Driver(response.json());
      })
      .catch(this.handleError);
  }

  public deleteDriverById(driverId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/drivers/' + driverId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
