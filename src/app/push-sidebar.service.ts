import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class PushSidebarService implements OnInit {
  private dataObs$ = new Subject();
  private mobileObs$ = new Subject();
  private stateMenu: boolean;
  private mobileVer = false;

  setState() {
    this.stateMenu = !this.stateMenu;
    this.dataObs$.next(this.stateMenu);
  }
  getState() {
    return this.dataObs$;
  }
  setMobileMenu() {
    this.mobileVer = !this.mobileVer;
    this.mobileObs$.next(this.mobileVer);
  }
  getMobileMenu() {
    return this.mobileObs$;
  }
    ngOnInit() {
      this.stateMenu = false;
    }
}
