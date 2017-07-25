import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car.classes';
import {CarDataService} from '../car-data.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.sass']
})
export class CarPanelComponent implements OnInit {
  car: Car;
  carSubscriber: Subscription;
  @Input() set selectedCarId(value: number) {
    if (this.carSubscriber) {
      this.carSubscriber.unsubscribe();
    }
    this.carSubscriber = this.carData.getCarById(value).subscribe(car => {
        this.car = car;
      },
      error => {});
  }
  constructor(private carData: CarDataService) { }
  ngOnInit() {
  }

}
