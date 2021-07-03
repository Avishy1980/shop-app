import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user: any

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (localStorage.getItem('token')) {
      this.user = jwt_decode(localStorage.getItem('token'))
    }
  }

}
