import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  baseUrl = '';

  constructor(private http: HttpClient) {
  }

  public async teams(): Promise<TeamListItem[]> {
    const result = await this.get<TeamListItem[]>('/TeamList');
    console.log(result);
    return result;
  }

  public async teamInfo(team: string): Promise<Team> {
    const result = await this.get<Team>('/TeamInfo?team=' + team);
    console.log(result);
    return result;
  }

  private async get<T>(url: string): Promise<T> {
    const options = this.httpOptions();
    const fullUrl = this.baseUrl + url;
    const p = this.http.get<T>(fullUrl, <Object>options).toPromise();
    return p;
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
