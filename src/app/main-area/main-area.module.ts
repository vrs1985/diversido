import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { CrumbsbreadComponent } from './navigation/crumbsbread/crumbsbread.component';
import { ReportingComponent } from './navigation/reporting/reporting.component';
import { MainAreaComponent } from './main-area.component';
import { OrderTableModule } from './../order-table/order-table.module';


@NgModule({
  imports: [
    CommonModule,
    OrderTableModule,
    RouterModule.forRoot([])
  ],
  declarations: [NavigationComponent, CrumbsbreadComponent, ReportingComponent, MainAreaComponent],
  exports: [ MainAreaComponent, ReportingComponent, CrumbsbreadComponent, NavigationComponent ]
})
export class MainAreaModule { }
