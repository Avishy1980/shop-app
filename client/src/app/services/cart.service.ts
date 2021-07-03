import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  user: any = jwt_decode(localStorage.getItem('token'))
  baseUrl = 'http://localhost:4500/api'
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  createCart(body: any) {
    return this.http.post(`${this.baseUrl}/add-cart`, body, { headers: this.headers })
  }

  getCart() {
    return this.http.get(`${this.baseUrl}/carts/${this.user._id}`, { headers: this.headers })
  }

  updateCart(body: any ,id: any) {
    return this.http.put(`${this.baseUrl}/update-cart/${id}`,body, { headers: this.headers })
  }

  deleteCart(id: string) {
    return this.http.delete(`${this.baseUrl}/delete-cart/${id}`, { headers: this.headers })
  }
}


