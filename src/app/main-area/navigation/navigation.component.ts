import { Component, OnInit } from '@angular/core';

import { PushSidebarService } from './../../push-sidebar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor(private pushSidebarService: PushSidebarService) { }
  mobilleMenu() {
      this.pushSidebarService.setMobileMenu();
  }

  ngOnInit() {
  }

}
