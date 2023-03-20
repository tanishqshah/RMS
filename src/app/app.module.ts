import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProjectManagerPanelComponent } from './project-manager-panel/project-manager-panel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ManagerNavComponent } from './manager-nav/manager-nav.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    ProjectManagerPanelComponent,
    ManagerNavComponent,
    ProjectListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
