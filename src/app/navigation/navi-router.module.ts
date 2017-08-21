import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesModule } from './../pages/pages.module';
import { MessageModule } from './../message/message.module';
import { LayoutsModule } from './../layouts/layouts.module';
import { OrderTableModule } from './../order-table/order-table.module';

import { OrderTableComponent } from './../order-table/order-table/order-table.component';
import { MessageComponent } from './../message/message/message.component';
import { PagesComponent } from './../pages/pages/pages.component';
import { LayoutsComponent } from './../layouts/layouts/layouts.component';

export const CHILD_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: OrderTableComponent,
    data: {
      breadcrumb: 'home'
    }
  },
  { path: 'message', component: MessageComponent,
    data: {
      breadcrumb: 'message'
    }
  },
  { path: 'pages', component: PagesComponent,
    data: {
      breadcrumb: 'pages'
    } 
  },
  { path: 'layouts', component: LayoutsComponent,
    data: {
      breadcrumb: 'layouts'
    } 
  }
];

@NgModule({
  imports: [
    PagesModule,
    MessageModule,
    LayoutsModule,
    OrderTableModule
  ]
})
export class NaviRouterModule { }
