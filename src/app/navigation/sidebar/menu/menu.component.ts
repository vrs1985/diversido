import { Component, OnInit } from '@angular/core';
import { PushSidebarService } from './../../../push-sidebar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private pushSidebarService: PushSidebarService) { }
    public visible: any = false;
    public isCollapsed: boolean = true;

  ngOnInit() {
    this.pushSidebarService.getState().subscribe(data => {
      this.visible = data;
    });
    this.pushSidebarService.getMobileMenu().subscribe(data => {
      this.visible = data;
    });
  }

}
