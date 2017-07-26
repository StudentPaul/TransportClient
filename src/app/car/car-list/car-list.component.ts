import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {Subscription} from 'rxjs/Subscription';

import {CarDataService} from '../car-data.service';
import {SharedService} from '../../shared/shared.service';
import {Car} from "../car.classes";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.sass']
})
export class CarListComponent  {

  filterWords = {keyword: '', convoy: ''};
  @Output() carSelected: EventEmitter<number> = new EventEmitter();
  selectedCarId: number;
  keywordSubscription: Subscription;
  convoySubscription: Subscription;
  displayedColumns = ['manufacturer', 'color', 'stateNumber', 'convoy'];
  carDatabase = new CarDatabase(this.carData);
  dataSource: CarDataSource | null;

  constructor (private carData: CarDataService, private shared: SharedService) {}

  ngOnInit() {
    this.dataSource = new CarDataSource(this.carDatabase, this.filterWords);
    this.keywordSubscription = this.shared.keyword$
      .subscribe(item => {
        this.filterWords.keyword = item;
        this.dataSource.changeFilter();
      });
    this.convoySubscription = this.shared.convoy$
      .subscribe(item => {
        this.filterWords.convoy = item;
        this.dataSource.changeFilter();
      });
  }
  handleRowClick(row) {
    this.selectedCarId = row.id;
    this.carSelected.emit(this.selectedCarId);
  }
}

export class CarDatabase {
  dataChange: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);
  get data(): Car[] { return this.dataChange.value; }

  constructor(carData: CarDataService) {
    carData.getAllCars().subscribe(cars => {
        this.dataChange.next(cars);
      },
      error => {});
  }
}

export class CarDataSource extends DataSource<any> {
  filterChange = new BehaviorSubject('');
  get filter(): string { return this.filterChange.value; }
  changeFilter() { this.filterChange.next(this.filterKeywords); }

  constructor(private exampleDatabase: CarDatabase, private filterKeywords: any) {
    super();
  }

  connect(): Observable<Car[]> {
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this.filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.exampleDatabase.data.slice().filter((item: Car) => {
        return (item.manufacturer.toLowerCase().indexOf(this.filterKeywords.keyword.toLowerCase()) !== -1)
          && (item.convoy.toLowerCase().indexOf(this.filterKeywords.convoy.toLowerCase()) !== -1);
      });
    });
  }

  disconnect() {}
}
