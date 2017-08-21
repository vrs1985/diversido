import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppRoutes } from './app.routes';
import { PushSidebarService } from './push-sidebar.service';

import { NavigationModule } from './navigation/navigation.module';
import { MainAreaModule } from './main-area/main-area.module';
import { PagesModule } from './pages/pages.module';
import { MessageModule } from './message/message.module';
import { LayoutsModule } from './layouts/layouts.module';
import { OrderTableModule } from './order-table/order-table.module';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NavigationModule,
    MainAreaModule
  ],
  providers: [PushSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }