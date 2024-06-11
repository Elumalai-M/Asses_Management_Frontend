import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AssetTrackerTableData } from '../interfaces/AssetTrackerTableData';
import { AssetTracker } from '../interfaces/AssetTracker';

@Injectable({
  providedIn: 'root'
})
  export class AssetTrackerService {

    private getAssetTrackerTableDataUrl = "http://localhost:8080/assetManagment/api/v1/assetTracker/assettrackerlist";

    private createAssetTrackerUrl = "http://localhost:8080/assetManagment/api/v1/assetTracker/assignAsset";

    constructor(private httpClient: HttpClient) {}


    getAssetTrackerListData(): Observable<any> {
      console.log("test");
      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
      return this.httpClient.get<AssetTrackerTableData[]>(`${this.getAssetTrackerTableDataUrl}`,{headers});
    }

    createAssetTracker(assetTrackerData: AssetTracker): Observable<any> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
      return this.httpClient.post<any>(`${this.createAssetTrackerUrl}`, assetTrackerData,{headers});
    }
  }
