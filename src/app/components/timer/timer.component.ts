import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit {
  public duration: number;
  public isDurationInitialized = false;

  constructor() {
    this.isDurationInitialized = false;
    this.duration = 0;
  }

  ngOnInit(): void {
  }

}
