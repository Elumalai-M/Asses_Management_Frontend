import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vendor } from '../interfaces/vendor';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private getEmployeeUrl = "http://localhost:8080/assetManagment/api/v1/vendor/fetchAllVendor";

  private saveVendorUrl ="http://localhost:8080/assetManagment/api/v1/vendor/createVendor";

  constructor(private httpClient: HttpClient) {}

  getVendorListData(): Observable<any> {
    console.log("test");
     const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
     return this.httpClient.get<vendor[]>(`${this.getEmployeeUrl}`,{headers});
   }

   saveVendorData(vendorData: vendor): Observable<any> {

    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
    return this.httpClient.post<any>(`${this.saveVendorUrl}`, vendorData, {headers})
      .pipe(
        tap(
          (response) => console.log('Successfully saved:', response),
          // (error) => console.error('Error occurred while saving:', error)
        )
      );
  }
  
}
