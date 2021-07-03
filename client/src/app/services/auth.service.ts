import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:4500/api'
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(
    private http: HttpClient
  ) { }

  register(body: User) {
    return this.http.post(`${this.baseUrl}/register`, body, { headers: this.headers })
  }

  login(body: any) {
    return this.http.post(`${this.baseUrl}/login`, body, { headers: this.headers })
  }


}

