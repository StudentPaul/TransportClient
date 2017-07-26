import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

  private keywordSource = new BehaviorSubject<string>('');
  private convoySource = new BehaviorSubject<string>('');
  private statusSource = new BehaviorSubject<string>('');
  keyword$ = this.keywordSource.asObservable();
  convoy$ = this.convoySource.asObservable();
  status$ = this.statusSource.asObservable();

  constructor() {}

  changeKeyword(keyword) {
    this.keywordSource.next(keyword);
  }
  changeConvoy(convoy) {
    this.convoySource.next(convoy);
  }
  changeStatus(status) {
    this.statusSource.next(status);
  }
}
