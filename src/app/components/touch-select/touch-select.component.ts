import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-touch-select',
  templateUrl: './touch-select.component.html',
  styleUrls: ['./touch-select.component.sass']
})
export class TouchSelectComponent implements OnInit {
  @Input() options: string[];
  @Output() onValueChanges: EventEmitter<string>;

  constructor() {
    this.options = [];
    this.onValueChanges = new EventEmitter<string>();
    this.onScrolled = _.debounce(this.onScrolled, 300);
  }

  ngOnInit(): void {
  }

  public onScrolled(): void {
    const selection = this.getCurrentSelection();
    this.onValueChanges.emit(selection);
  }

  private getCurrentSelection(): string {
    return "";
  }

}
