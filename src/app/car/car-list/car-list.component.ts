
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
  constructor (private carData: CarDataService, private shared: SharedService) {}
  filterWords = {keyword: '', convoy: ''};
  @Output()
  carSelected: EventEmitter<number> = new EventEmitter();
  selectedCarId: number;
  keywordSubscription: Subscription;
  convoySubscription: Subscription;
  displayedColumns = ['manufacturer', 'color', 'stateNumber', 'convoy'];
  carDatabase = new CarDatabase(this.carData);
  dataSource: CarDataSource | null;

  @ViewChild('filter') filter: ElementRef;

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


/** An example database that the data source uses to retrieve data for the table. */
export class CarDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);
  get data(): Car[] { return this.dataChange.value; }

  constructor(carData: CarDataService) {
    carData.getAllCars().subscribe(cars => {
        this.dataChange.next(cars);
      },
      error => {});
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, CarDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class CarDataSource extends DataSource<any> {
  filterChange = new BehaviorSubject('');
  get filter(): string { return this.filterChange.value; }
  changeFilter() { this.filterChange.next(this.filterKeywords); }

  constructor(private exampleDatabase: CarDatabase, private filterKeywords: any) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
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
