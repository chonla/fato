import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppPoolService } from 'src/app/services/app-pool.service';
import * as _ from 'lodash';
import { AppTitle } from 'src/app/constants/app.const';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  public activatedApps: string[];
  public appTitle: { [key: string]: string };
  public showNoAppNotification: boolean;

  private destroyed$: ReplaySubject<void>;

  constructor(private appPoolService: AppPoolService) {
    this.activatedApps = [];
    this.showNoAppNotification = true;
    this.destroyed$ = new ReplaySubject(1);
    this.appTitle = AppTitle;
  }

  ngOnInit(): void {
    this.appPoolService.onAppPoolChanges().pipe(
      takeUntil(this.destroyed$)
    ).subscribe((appNames: string[]) => {
      this.activatedApps = _.cloneDeep(appNames);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public closeNoAppNotification(): void {
    this.showNoAppNotification = false;
  }

}
