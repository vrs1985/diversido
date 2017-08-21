import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTableComponent } from './order-table/order-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderTableComponent],
  exports: [OrderTableComponent]
})
export class OrderTableModule { }
