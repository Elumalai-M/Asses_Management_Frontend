import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  private loginURL = "http://localhost:8080/login";

  login(user: User): Observable<any> {
    debugger;
    return this.httpClient.post<any>(`${this.loginURL}`, user);
  }

}
