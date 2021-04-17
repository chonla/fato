import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppPoolService } from 'src/app/services/app-pool.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Output() onCollapsed: EventEmitter<void>;
  @Output() onExpanded: EventEmitter<void>;
  
  public isCollapsed: boolean;

  constructor(private appPoolService: AppPoolService) {
    this.onCollapsed = new EventEmitter();
    this.onExpanded = new EventEmitter();
    this.isCollapsed = false;
  }

  ngOnInit(): void {
  }

  public toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.onCollapsed.emit();
    } else {
      this.onExpanded.emit();
    }
  }

  public activateApp(appName: string): void {
    this.appPoolService.activate(appName);
  }

}
