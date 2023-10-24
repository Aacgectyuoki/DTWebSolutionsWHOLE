import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit {

  images: string[] = [
    './assets/angular-tutorials/angular-basics/Angular_Basic_Concepts.png',
    // Add more image paths
  ];

  currentImage: string = this.images[0];

  // Handle the right and left arrow key press
  // @HostListener('window:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.key === 'ArrowRight') {
  //     this.nextImage();
  //   } else if (event.key === 'ArrowLeft') {
  //     this.prevImage();
  //   }
  // }

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

  constructor() { }

  ngOnInit(): void {
  }

}
