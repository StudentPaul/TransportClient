/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DriverDataService } from './driver-data.service';
import { ApiService } from '../api.service';
import { ApiMockService } from '../api-mock.service';

describe('DriverDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DriverDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([DriverDataService], (service: DriverDataService) => {
    expect(service).toBeTruthy();
  }));

});
