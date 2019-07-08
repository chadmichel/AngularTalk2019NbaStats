import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) {
  }

  public async teams(): Promise<TeamListItem[]> {
    const resolve = (done) => {
      const fake = [
        {name: 'Team Name', location: 'Location' },
      ];
      done(fake);
    };
    return new Promise<TeamListItem[]>(resolve);
  }

  public async teamInfo(team: string): Promise<Team> {
    const resolve = (done) => {
    const fake = {
    name: 'Team Name',
    location: 'Location',
    players: [
    {
    full_name: 'Michael Jordan',
    first_name: 'Michael',
    last_name: 'Jordan',
    height: 78,
    weight: 220,
    position: 'G',
    primary_position: 'SG',
    jersey_number: 23
    }
    ]
    };done(fake);
    };
    return new Promise<Team>(resolve);
    }
    

  httpOptions(): any {

    const subId = '';

    return {
        headers: new HttpHeaders({
            Accept: 'application/json',
            'Ocp-Apim-Subscription-Key': subId
        }),
    };
  }

}
