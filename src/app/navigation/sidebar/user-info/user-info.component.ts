import { Component, OnInit } from '@angular/core';
import { PushSidebarService } from './../../../push-sidebar.service';

export class User {
  id: number;
  url: string;
  name: string;
  company: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  user: User = {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png',
    name: 'John Doe',
    company: 'MicroWare'
  };

  constructor(private pushSidebarService: PushSidebarService) { }
    public visible: any = false;

  ngOnInit() {
    this.pushSidebarService.getState().subscribe(data => {
      this.visible = data;
    });
    this.pushSidebarService.getMobileMenu().subscribe(data => {
      this.visible = data;
    });
  }

}
