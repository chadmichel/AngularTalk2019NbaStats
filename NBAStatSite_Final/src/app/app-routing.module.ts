import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TeamInfoComponent } from './team-info/team-info.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:name', component: TeamInfoComponent },
  { path: '**', redirectTo: 'teams' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
