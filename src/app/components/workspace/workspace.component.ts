import { Component, OnInit } from '@angular/core';
import { AppPoolService } from 'src/app/services/app-pool.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {
  public activatedApps: string[];
  public showNoAppNotification: boolean;

  constructor(private appPoolService: AppPoolService) {
    this.activatedApps = [];
    this.showNoAppNotification = true;
  }

  ngOnInit(): void {
  }

  public closeNoAppNotification(): void {
    this.showNoAppNotification = false;
  }

}
