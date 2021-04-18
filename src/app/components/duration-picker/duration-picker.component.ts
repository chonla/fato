import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-duration-picker',
  templateUrl: './duration-picker.component.html',
  styleUrls: ['./duration-picker.component.sass']
})
export class DurationPickerComponent implements OnInit {
  public minuteList: string[];

  constructor() {
    this.minuteList = _.range(99).map(v => (v + 1).toString().padStart(2, '0'));
  }

  ngOnInit(): void {
  }

}
