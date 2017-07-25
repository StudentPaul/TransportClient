import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {Car, CarEnums} from './car/car.classes';
import { Driver } from './driver/driver.classes';

@Injectable()
export class ApiService {

  constructor(
  ) {
  }

  public getAllCars(): Observable<Car[]> {
    return Observable.of([
      new Car({
          id: 1,
          manufacturer: 'Chana',
          model: 'Benni',
          color: 'Голубая',
          stateNumber: 'G 565 FGN',
          convoy: '0001А-АНижний Новгород'
        }),
      new Car({
          id: 2,
          manufacturer: 'ГолАЗ',
          model: '5291',
          color: 'Голубая',
          stateNumber: 'AH 455 54',
          convoy: '0001А-АНижний Новгород'
        }),
      new Car({
          id: 3,
          manufacturer: 'Acura',
          model: 'Integra',
          color: 'Красная',
          stateNumber: 'B 323 BB 77',
          convoy: '0001А-АНижний Новгород'
        }),
      new Car({
          id: 4,
          manufacturer: 'ВАЗ',
          model: '1117 Kalina Универсал',
          color: 'Красный',
          stateNumber: 'П 6565 РР',
          convoy: '0001А-АНижний Новгород'
        }),
    ]);
  }

  public createCar(car: Car): Observable<Car> {
    return Observable.of(car);
  }

  public getCarById(carId: number): Observable<Car> {
    return Observable.of(
      new Car({
          id: 3,
          manufacturer: 'Acura',
          model: 'Integra',
          color: 'Красная',
          stateNumber: 'B 323 BB 77',
          year: '1980',
          convoy: '0001А-АНижний Новгород',
          bodyType: 'Седан',
          organization: true,
          availableForAll: false,
          options: {
            'Детское кресло': false,
            'Багаж': true,
            'доставка': true,
            'Кондиционер': false,
            'до 1 кг': false,
            'Некурящий водитель': true
          },
          notes: 'Машина в отличном состоянии',
          drivers: [
            new Driver({
              id: 3,
              firstName: 'Иван',
              secondName: 'Иванов',
              parentName: 'Иванович'
            })
          ],
        })
    );
  }

  public updateCar(car: Car): Observable<Car> {
    return Observable.of(car);
  }

  public deleteCarById(carId: number): Observable<null> {
    return null;
  }
  public getCarEnums(): Observable<CarEnums> {
    return Observable.of(
      new CarEnums({
          manufacturers: [
            {name: 'Acura', models: ['Integra', 'AcuraModel1', 'AcuraModel2']},
            {name: 'Chana', models: ['Benni', 'ChanaModel1', 'ChanaModel2']},
            {name: 'ВАЗ', models: ['1117 Kalina Универсал', 'Model1', 'Model2']},
            {name: 'ГолАЗ', models: ['5291', '5527', '5101']},
          ],
          colors: ['Красная', 'Голубая', 'Серая', 'Желтая', 'Черная', 'Зеленая'],
          bodyTypes: ['Седан', 'Хэтчбек', 'Купе', 'Универсал', 'Микроавтобус', 'Минивэн'],
          options: ['Детское кресло', 'Багаж', 'доставка', 'Кондиционер', 'до 1 кг', 'Некурящий водитель'],
        })
    );
  }
  public getAllDrivers(): Observable<Driver[]> {
    return Observable.of([
      new Driver({
          id: 1,
          firstName: 'Петр',
          secondName: 'Петров'
        }),
      new Driver({
          id: 2,
          firstName: 'Иван',
          secondName: 'Иванов'
        }),
      new Driver({
          id: 3,
          firstName: 'Иван',
          secondName: 'Иванов',
          parentName: 'Иванович'
        }),
      new Driver({
          id: 4,
          firstName: 'Петр',
          secondName: 'Петров',
          callSign: 1010,
          onDuty: true
        }),
      new Driver({
          id: 5,
          firstName: 'Александр',
          secondName: 'Петров',
          parentName: 'Николаевич',
          callSign: 33365
        }),
    ]);
  }

  public createDriver(driver: Driver): Observable<Driver> {
    return Observable.of(driver);
  }

  public getDriverById(driverId: number): Observable<Driver> {
    return Observable.of(
      new Driver({
          id: 5,
          firstName: 'Александр',
          secondName: 'Петров',
          parentName: 'Николаевич',
          callSign: 33365,
          phoneNumbers: ['+73655525425'],
          cars: [
            new Car({
                id: 4,
                manufacturer: 'ВАЗ',
                model: '1117 Kalina Универсал',
                color: 'Красный',
                stateNumber: 'П 6565 РР',
                convoy: '0001А-АНижний Новгород'
              })
          ]
        })
    );
  }

  public updateDriver(car: Car): Observable<Car> {
    return Observable.of(car);
  }

  public deleteDriverById(carId: number): Observable<null> {
    return null;
  }
}
