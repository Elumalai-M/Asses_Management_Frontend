import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetData } from '../interfaces/AssestData';
import { AssestDatas } from '../interfaces/AssestDatas';

@Injectable({
  providedIn: 'root'
})
export class AssestService {


  private assestCreateUrl = "http://localhost:8080/assest/create";

  private getAssestUrl = "http://localhost:8080/assest/getAssestList";

  private getAssestByIdUrl = "http://localhost:8080/assest/getAssestById";



  constructor(private httpClient: HttpClient ) { }


  createAssestData(assestData: AssetData ): Observable<Object> {
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
    return this.httpClient.get<AssestDatas[]>(`${this.getAssestUrl}`,{headers});
  }

  getAssetById(assetId: number): Observable<AssestDatas> {
    console.log(assetId);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
    const url = `${this.getAssestByIdUrl}/${assetId}`; // Assuming endpoint is /assets/:id
    return this.httpClient.get<AssestDatas>(url, { headers });
  }
}
