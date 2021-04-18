import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-touch-select',
  templateUrl: './touch-select.component.html',
  styleUrls: ['./touch-select.component.sass']
})
export class TouchSelectComponent implements OnInit {
  @Input() options: string[];

  constructor() {
    this.options = [];
  }

  ngOnInit(): void {
  }

}
