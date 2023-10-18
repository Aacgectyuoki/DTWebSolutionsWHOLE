import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  isNavbarOpen = false; // Set to false to start with the menu closed

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
