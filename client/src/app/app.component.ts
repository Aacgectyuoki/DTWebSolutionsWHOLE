import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  isNavbarOpen = true;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
