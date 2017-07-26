import { Injectable } from '@angular/core';
import { ApiService } from '../api-mock.service';
import { Observable } from 'rxjs/Observable';

import { Driver } from './driver.classes';

@Injectable()
export class DriverDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /drivers
  addDriver(driver: Driver): Observable<Driver> {
    return this.api.createDriver(driver);
  }

  // Simulate DELETE /drivers/:id
  deleteTodoById(driverId: number): Observable<Driver> {
    return this.api.deleteDriverById(driverId);
  }

  // Simulate PUT /drivers/:id
  updateTodo(driver: Driver): Observable<Driver> {
    return this.api.updateDriver(driver);
  }

  // Simulate GET /drivers
  getAllDrivers(): Observable<Driver[]> {
    return this.api.getAllDrivers();
  }

  // Simulate GET /drivers/:id
  getTodoById(driverId: number): Observable<Driver> {
    return this.api.getDriverById(driverId);
  }

}
