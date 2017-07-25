import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.sass']
})
export class CarPanelComponent implements OnInit {
  @Input() selectedCarId: number;
  constructor() { }
  ngOnInit() {
  }

}
