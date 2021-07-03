import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _products: any[];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe((p: any) => this._products = p.products,
        (err) => alert(err))
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }


}
