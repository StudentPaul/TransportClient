import { Component } from '@angular/core';
import {SharedService} from './shared/shared.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  core: SharedService;
  title = 'app';
  convoys = ['0001А-АНижний Новгород', '0002А-АНижний Новгород', '0003А-АНижний Новгород'];
  statuses = ['Все статусы', 'На смене', 'Не на смене'];
  searchKeyword = '';
  selectedConvoy = '';
  selectedStatus = '';

  constructor(private shared: SharedService, private router: Router) {}

  changeKeyword() {
    this.shared.changeKeyword(this.searchKeyword);
  }
  changeConvoy() {
    this.shared.changeConvoy(this.selectedConvoy);
  }
  changeStatus() {
    this.shared.changeStatus(this.selectedStatus);
  }
  getRouteURL() {
    return this.router.url;
  }
}
