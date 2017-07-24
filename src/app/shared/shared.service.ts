import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

  constructor() {}

  private keywordSource = new BehaviorSubject<string>('');
  keyword$ = this.keywordSource.asObservable();
  private convoySource = new BehaviorSubject<string>('');
  convoy$ = this.convoySource.asObservable();
  private statusSource = new BehaviorSubject<string>('');
  status$ = this.statusSource.asObservable();
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
