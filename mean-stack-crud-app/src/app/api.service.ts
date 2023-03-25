import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/auth/model/user';
import { Observable, of } from 'rxjs';

class SignupResponse {
  constructor(public message: string, public user: User) {}
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  signup(user: User): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(
      'http://localhost:4000/auth/signup',
      user
    );
  }
}
