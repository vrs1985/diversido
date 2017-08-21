import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { LogoComponent } from './logo/logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';
import { MenuComponent } from './sidebar/menu/menu.component';

import { CollapseModule } from 'ngx-bootstrap';

import { LogoPipe } from './../logo.pipe';


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule,
    CollapseModule.forRoot()
  ],
  declarations: [SidebarComponent, UserInfoComponent, MenuComponent, LogoComponent, LogoPipe],
  exports: [ SidebarComponent ]
})
export class NavigationModule { }
