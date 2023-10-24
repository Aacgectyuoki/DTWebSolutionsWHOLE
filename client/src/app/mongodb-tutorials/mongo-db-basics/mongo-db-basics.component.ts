import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongo-db-basics',
  templateUrl: './mongo-db-basics.component.html',
  styleUrls: ['./mongo-db-basics.component.css']
})
export class MongoDbBasicsComponent implements OnInit {

  images: string[] = [
    './assets/mongodb-tutorials/MongoDB-01.png',
    './assets/mongodb-tutorials/MongoDB-02.png',
    './assets/mongodb-tutorials/MongoDB-03.png',
    './assets/mongodb-tutorials/MongoDB-04.png',
    './assets/mongodb-tutorials/MongoDB-05.png',
    './assets/mongodb-tutorials/MongoDB-06.png',
    './assets/mongodb-tutorials/MongoDB-07.png',
    './assets/mongodb-tutorials/MongoDB-08.png',
    './assets/mongodb-tutorials/MongoDB-09.png',
    './assets/mongodb-tutorials/MongoDB-10.png',
    './assets/mongodb-tutorials/MongoDB-11.png',
    './assets/mongodb-tutorials/MongoDB-12.png',
    './assets/mongodb-tutorials/MongoDB-13.png',
    './assets/mongodb-tutorials/MongoDB-14.png',
    // Add more image paths
  ];

  currentImage: string = this.images[0];

  // Handle the right and left arrow key press
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }

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
