import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderTableComponent } from './../order-table/order-table/order-table.component';
import { MessageComponent } from './../message/message/message.component';
import { PagesComponent } from './../pages/pages/pages.component';
import { LayoutsComponent } from './../layouts/layouts/layouts.component';

export const CHILD_ROUTES: Routes = [
  { path: 'order-table', component: OrderTableComponent },
  { path: 'message', component: MessageComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'layouts', component: LayoutsComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(CHILD_ROUTES);
