import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams: TeamListItem[];

  constructor(private stats: StatsService,
              private router: Router) { }

  async ngOnInit() {
    this.teams = await this.stats.teams();
  }

  goToTeam(name) {
    this.router.navigate(['team', name]);
  }
}
