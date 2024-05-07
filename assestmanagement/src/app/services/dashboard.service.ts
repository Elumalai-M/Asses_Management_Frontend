import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssestDatas } from '../interfaces/AssestDatas';
import { AssetSummary } from '../interfaces/AssestSummary';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private getAssestSummaryUrl = "http://localhost:8080/dashboard/summary";

  constructor(private httpClient: HttpClient ) { }

  getAssestSummary() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
    return this.httpClient.get<AssetSummary>(`${this.getAssestSummaryUrl}`,{headers});
  }
}
