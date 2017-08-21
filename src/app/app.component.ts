import { Component, OnInit } from '@angular/core';
import { PushSidebarService } from './push-sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  switchOn: any = false;
  mobileMenu: any = false;

  constructor(private pushSidebarService: PushSidebarService) { }

  ngOnInit() {
    this.pushSidebarService.getState().subscribe(data => {
      this.switchOn = data;
    });
    this.pushSidebarService.getMobileMenu().subscribe(data => {
      this.mobileMenu = data;
    });
  }

}
