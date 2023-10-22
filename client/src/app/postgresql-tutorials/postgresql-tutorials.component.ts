import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postgresql-tutorials',
  templateUrl: './postgresql-tutorials.component.html',
  styleUrls: ['./postgresql-tutorials.component.css']
})
export class PostgresqlTutorialsComponent implements OnInit {
  images: string[] = [
    './assets/postgresql-tutorials/PostgreSQL_Data_Types_Page1.png',
    './assets/postgresql-tutorials/PostgreSQL_Data_Types_Page2.png',
    // Add more image paths
  ];
  // currentImage: string = this.images[0];

  // nextImage() {
  //   const currentIndex = this.images.indexOf(this.currentImage);
  //   if (currentIndex < this.images.length - 1) {
  //     this.currentImage = this.images[currentIndex + 1];
  //   }
  // }

  // prevImage() {
  //   const currentIndex = this.images.indexOf(this.currentImage);
  //   if (currentIndex > 0) {
  //     this.currentImage = this.images[currentIndex - 1];
  //   }
  // }
  currentImage: string = this.images[0];

  nextImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    if (currentIndex < this.images.length - 1) {
      this.currentImage = this.images[currentIndex + 1];
    }
  }

  prevImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    if (currentIndex > 0) {
      this.currentImage = this.images[currentIndex - 1];
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
