import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { PushSidebarService } from './push-sidebar.service';

import { NavigationModule } from './navigation/navigation.module';
import { MainAreaModule } from './main-area/main-area.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: AppComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    NavigationModule,
    MainAreaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PushSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
