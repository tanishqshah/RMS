import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectManagerPanelComponent } from './project-manager-panel/project-manager-panel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProjectManagerPanelComponent },
  { path: 'admin', component: AdminPanelComponent },
  {
    path: 'manager',
    component: ProjectManagerPanelComponent,
    children: [
      { path: '', pathMatch: 'full', component: ProjectListComponent },
      { path: 'create-project', component: CreateProjectComponent },
      { path: 'project-list', component: ProjectListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
