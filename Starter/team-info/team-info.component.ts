import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  public team: Team;

  constructor(private stats: StatsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const name = this.activatedRoute.snapshot.params.name;
    this.team = await this.stats.teamInfo(name);
  }
}
