import { Component } from '@angular/core';
import {SharedService} from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private shared: SharedService) {
  }
  core: SharedService;
  title = 'app';
  convoys = ['0001А-АНижний Новгород', '0002А-АНижний Новгород', '0003А-АНижний Новгород'];
  statuses = ['Все статусы', 'На смене', 'Не на смене'];
  searchKeyword = '';
  selectedConvoy = '';
  selectedStatus = '';
  changeKeyword() {
    this.shared.changeKeyword(this.searchKeyword);
  }
  changeConvoy() {
    this.shared.changeConvoy(this.selectedConvoy);
  }
  changeStatus() {
    this.shared.changeStatus(this.selectedStatus);
  }
}
