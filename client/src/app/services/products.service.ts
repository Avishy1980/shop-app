import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:4500/api'
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })


  constructor(public http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${this.baseUrl}/get-product`, { headers: this.headers })
  }

}

