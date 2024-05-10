import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetData } from '../interfaces/AssestData';
import { AssestDatas } from '../interfaces/AssestDatas';

@Injectable({
  providedIn: 'root'
})
export class AssestService {


  private assestCreateUrl = "http://localhost:8080/asset/create";

  private getAssestUrl = "http://localhost:8080/asset/getAssetList";

  private getAssestByIdUrl = "http://localhost:8080/asset/getAssetById";

  private assetUpdateUrl ="http://localhost:8080/asset/update";

  constructor(private httpClient: HttpClient ) { }


  createAssestData(assestData: {}): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    });

    const options = {
      headers: headers,
     // body: employeeIdsToDelete // Send employeeIds as request body
    };
    console.log('finalData',assestData);
    return this.httpClient.post(this.assestCreateUrl,assestData, options);
  }

  getAssestData() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
    return this.httpClient.get<AssetData[]>(`${this.getAssestUrl}`,{headers});
  }

  getAssetById(assetId: number): Observable<AssetData> {
    console.log(assetId);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
    const url = `${this.getAssestByIdUrl}/${assetId}`; // Assuming endpoint is /assets/:id
    return this.httpClient.get<AssetData>(url, { headers });
  }

  updateAssetData(assetData: AssetData ): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    });

    const options = {
      headers: headers,
     // body: employeeIdsToDelete // Send employeeIds as request body
    };
    console.log('assetData',assetData);
    return this.httpClient.put(this.assetUpdateUrl,assetData, options);
  }

}
