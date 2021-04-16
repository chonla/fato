import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.sass']
})
export class AppPageComponent {
  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = false;
  }

  public onSidebarExpanded():void {
    this.isCollapsed = false;
  }

  public onSidebarCollapsed(): void {
    this.isCollapsed = true;
  }
}
