import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarOpen: boolean = false; // Property to track the open/closed state of the navbar

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen; // Method to toggle the navbar state
  }
}
