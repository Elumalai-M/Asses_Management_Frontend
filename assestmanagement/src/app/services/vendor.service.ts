import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { vendor } from '../interfaces/vendor';
import { tap , catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private getEmployeeUrl = "http://localhost:8080/assetManagment/api/v1/vendor/fetchAllVendor";

  private saveVendorUrl ="http://localhost:8080/assetManagment/api/v1/vendor/createVendor";

  private updateVendorUrl="http://localhost:8080/assetManagment/api/v1/vendor/updateVendor";

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
           (error) => console.error('Error occurred while saving:', error)
        ), 

        catchError(error => {
          console.error('Error occurred:', error);
          return of(null); // or throwError(error) if you want to propagate the error
        })
      );
  }

  
}
