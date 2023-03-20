import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProjectManagerPanelComponent } from './project-manager-panel/project-manager-panel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProjectManagerPanelComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'manager', component: ProjectManagerPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
