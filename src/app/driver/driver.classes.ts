/**
 * Created by socio on 7/24/2017.
 */
import { Car } from '../car/car.classes';

export class Driver {

  id: number;
  callSign: number;
  onDuty = false;
  balance = 0;
  firstName = '';
  secondName = '';
  parentName = '';
  birthDate: string;
  isMale: boolean;
  passportSeries: string;
  passportNumber: string;
  passportDate: string;
  passportGivenBy: string;
  registrationAdress: string;
  livingAdress: string;
  phoneNumbers: Array<string>;
  cars: Array<Car>;
  imageURL: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
