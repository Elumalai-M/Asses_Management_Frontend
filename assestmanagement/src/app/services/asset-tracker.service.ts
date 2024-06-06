import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AssetTrackerTableData } from '../interfaces/AssetTrackerTableData';


@Injectable({
  providedIn: 'root'
})
  export class AssetTrackerService {

    private getAssetTrackerTableDataUrl = "http://localhost:8080/assetManagment/api/v1/assetTracker/assettrackerlist";

    private updateAssetTrackerData = "http://localhost:8080/assetManagment/api/v1/assetTracker/updateAssignAsset";

    constructor(private httpClient: HttpClient) {}


    getAssetTrackerListData(): Observable<any> {
      console.log("test");
      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
      return this.httpClient.get<AssetTrackerTableData[]>(`${this.getAssetTrackerTableDataUrl}`,{headers});
    }

    updateAssetTrackerDataData(assetTrackerData: AssetTrackerTableData): Observable<any> {

      console.log(assetTrackerData);

      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
      return this.httpClient.put<any>(`${this.updateAssetTrackerData}`, assetTrackerData, {headers})
        .pipe(
          tap(
            (response) => console.log('Successfully saved:', response),
            // (error) => console.error('Error occurred while saving:', error)
          )
        );
    }

  }
