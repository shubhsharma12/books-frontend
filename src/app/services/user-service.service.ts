import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ['http://localhost:8080/'];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'signup', signRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest);
  }

  fetchUsername(): Observable<any> {
    const jwtToken = localStorage.getItem('jwt');

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + jwtToken);

    return this.http.get(BASE_URL + 'api/user/info', {
      headers: headers,
    });
  }
}
