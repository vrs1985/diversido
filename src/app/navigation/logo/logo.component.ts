import { Component, OnInit } from '@angular/core';
import { PushSidebarService } from './../../push-sidebar.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {

  constructor(private pushSidebarService: PushSidebarService) { }
    visible: any = false;
    logo: string;
    toggle() {
        this.pushSidebarService.setState();
        this.visible = !this.visible;
    }
      ngOnInit() {
        this.logo = 'Company';
        this.pushSidebarService.getMobileMenu().subscribe(data => {
          this.visible = data;
        });
      }

}
