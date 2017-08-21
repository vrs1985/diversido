import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutsComponent],
  exports: [LayoutsComponent]
})
export class LayoutsModule { }
