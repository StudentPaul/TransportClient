/**
 * Created by socio on 7/24/2017.
 */
import { Driver } from '../driver/driver.classes';

export class Car {
  id: number;
  manufacturer: string;
  model: string;
  year: number;
  bodyType: string;
  color: string;
  stateNumber: string;
  convoy: string;
  organization = true;
  availableForAll = false;
  options: Object;
  notes: string;
  drivers: Array<Driver>;
  imageURL: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class CarEnums {
  manufacturers: Array<{name: string, models: Array<string>}>;
  bodyTypes: Array<string>;
  colors: Array<string>;
  options: Array<string>;
  convoys: Array<string>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
