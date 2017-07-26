import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {SharedService} from "../shared/shared.service";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.sass']
})
export class DriverComponent implements OnInit, OnDestroy {
  constructor(private shared: SharedService , private snackBar: MdSnackBar) {}
  selectedDriverId: number;
  keyword = '';
  status = '';
  convoy = '';
  keywordSubscription: Subscription;
  statusSubscription: Subscription;
  convoySubscription: Subscription;
  ngOnInit() {
    this.keywordSubscription = this.shared.keyword$
      .subscribe(item => this.keyword = item);
    this.statusSubscription = this.shared.status$
      .subscribe(item => this.status = item);
    this.convoySubscription = this.shared.convoy$
      .subscribe(item => this.convoy = item);
  }
  ngOnDestroy() {
    this.keywordSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
    this.convoySubscription.unsubscribe();
  }
  driverSelected(id: number) {
    this.selectedDriverId = id;
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
  unselectDriver() {
    this.selectedDriverId = null;
  }

}
