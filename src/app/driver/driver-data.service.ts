import { Injectable } from '@angular/core';
import { ApiService } from '../api-mock.service';
import { Observable } from 'rxjs/Observable';

import { Driver } from './driver.classes';

@Injectable()
export class DriverDataService {

  constructor(private api: ApiService) {}

  addDriver(driver: Driver): Observable<Driver> {
    return this.api.createDriver(driver);
  }

  deleteDriverById(driverId: number): Observable<Driver> {
    return this.api.deleteDriverById(driverId);
  }

  updateDriver(driver: Driver): Observable<Driver> {
    return this.api.updateDriver(driver);
  }

  getAllDrivers(): Observable<Driver[]> {
    return this.api.getAllDrivers();
  }

  getDriverById(driverId: number): Observable<Driver> {
    return this.api.getDriverById(driverId);
  }

}
