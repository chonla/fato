import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppPoolService {
  private poolChanges: Subject<string[]>;
  private pool: string[];

  constructor() {
    this.pool = [];
    this.poolChanges = new Subject();
    this.poolChanges.next(this.pool);
  }

  public activate(appName: string): void {
    if (this.pool.indexOf(appName) === -1) {
      this.pool.push(appName);
      this.poolChanges.next(this.pool);
    }
  }

  public onAppPoolChanges(): Observable<string[]> {
    return this.poolChanges.asObservable();
  }
}
