import { Component, OnInit, OnDestroy  } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit, OnDestroy {

  constructor(private shared: SharedService) {}
  selectedCarId: number;
  keyword = '';
  convoy = '';
  keywordSubscription: Subscription;
  convoySubscription: Subscription;
  ngOnInit() {
    this.keywordSubscription = this.shared.keyword$
      .subscribe(item => this.keyword = item);
    this.convoySubscription = this.shared.convoy$
      .subscribe(item => this.convoy = item);
  }
  ngOnDestroy() {
    this.keywordSubscription.unsubscribe();
    this.convoySubscription.unsubscribe();
  }
  carSelected(id: number) {
    this.selectedCarId = id;
  }

}
