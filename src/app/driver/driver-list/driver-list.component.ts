import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import {Driver} from '../driver.classes';
import {SharedService} from '../../shared/shared.service';
import {DriverDataService} from '../driver-data.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.sass']
})
export class DriverListComponent implements OnInit {

  constructor(private driverData: DriverDataService, private shared: SharedService) { }
  filterWords = {keyword: '', status: ''};
  @Output()
  driverSelected: EventEmitter<number> = new EventEmitter();
  selectedDriverId: number;
  keywordSubscription: Subscription;
  statusSubscription: Subscription;
  displayedColumns = ['callSign', 'fullName', 'status', 'balance'];
  driverDatabase = new DriverDatabase(this.driverData);
  dataSource: DriverDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new DriverDataSource(this.driverDatabase, this.filterWords);
    this.keywordSubscription = this.shared.keyword$
      .subscribe(item => {
        this.filterWords.keyword = item;
        this.dataSource.changeFilter();
      });
    this.statusSubscription = this.shared.status$
      .subscribe(item => {
        this.filterWords.status = item;
        this.dataSource.changeFilter();
      });
  }
  handleRowClick(row) {
    this.selectedDriverId = row.id;
    this.driverSelected.emit(this.selectedDriverId);
  }

}

export class DriverDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Driver[]> = new BehaviorSubject<Driver[]>([]);
  get data(): Driver[] { return this.dataChange.value; }

  constructor(driverData: DriverDataService) {
    driverData.getAllDrivers().subscribe(drivers => {
        this.dataChange.next(drivers);
      },
      error => {});
  }
}

export class DriverDataSource extends DataSource<any> {

  filterChange = new BehaviorSubject('');
  get filter(): string { return this.filterChange.value; }
  changeFilter() { this.filterChange.next(this.filterKeywords); }

  constructor(private exampleDatabase: DriverDatabase, private filterKeywords: any) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Driver[]> {
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this.filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.exampleDatabase.data.slice().filter((item: Driver) => {
        const fullName = item.firstName + item.secondName + item.parentName + item.callSign;
        return (fullName.toLowerCase().indexOf(this.filterKeywords.keyword.toLowerCase()) !== -1)
          && (item.onDuty === (this.filterKeywords.status.toLowerCase() === 'на смене') ? true :
            (this.filterKeywords.status.toLowerCase() === 'не на смене') ? false : item.onDuty );
      });
    });
  }

  disconnect() {}
}
