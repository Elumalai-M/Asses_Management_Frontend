import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeData } from '../interfaces/EmployeeData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private getEmployeeUrl = "http://localhost:8080/emp/getEmployeeList";
  private deleteURL = "http://localhost:8080/emp/deleteEmployee";
  private getEmployeeByIdUrl = "http://localhost:8080/emp/getEmployeeById";
  private employeeUpdateUrl = "http://localhost:8080/emp/update";
  private createEmployeeUrl ='http://localhost:8080/emp/create';
  private uploadCSVFileURl = 'http://localhost:8080/emp/importEmployeeData';

  constructor(private httpClient: HttpClient) {}

   getEmployeeListData(): Observable<any> {
   // console.log(this.authToken);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
    return this.httpClient.get<EmployeeData[]>(`${this.getEmployeeUrl}`,{headers});
  }

  deleteSelectedEmployees(employeeIdsToDelete: number[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    });

    const options = {
      headers: headers,
     // body: employeeIdsToDelete // Send employeeIds as request body
    };
    console.log('finalData',employeeIdsToDelete);
    return this.httpClient.put<void>(this.deleteURL,employeeIdsToDelete, options);
  }

  getEmployeeById(assetId: string): Observable<EmployeeData> {
    console.log(assetId);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
    const url = `${this.getEmployeeByIdUrl}/${assetId}`; // Assuming endpoint is /assets/:id
    return this.httpClient.get<EmployeeData>(url, { headers });
  }

  updateEmlpoyeetData(employeeData: EmployeeData ): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    });

    const options = {
      headers: headers,
     // body: employeeIdsToDelete // Send employeeIds as request body
    };
    console.log('finalData',employeeData);
    return this.httpClient.put(this.employeeUpdateUrl,employeeData, options);
  }

  createEmployee(user: EmployeeData): Observable<any> {
    debugger;
    return this.httpClient.post<any>(`${this.createEmployeeUrl}`, user);
  }

  uploadCSVFile(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    });

    const options = {
      headers: headers,
     // body: employeeIdsToDelete // Send employeeIds as request body
    };
    return this.httpClient.post(this.uploadCSVFileURl, formData,);
  }
}
