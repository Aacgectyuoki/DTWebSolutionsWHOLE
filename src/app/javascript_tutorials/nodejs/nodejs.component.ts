import { HostListener, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  images: string[] = [ 
    './assets/javascript-tutorials/nodejs_png_images/Node.js-01.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-02.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-03.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-04.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-05.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-06.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-07.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-08.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-09.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-10.png',
    './assets/javascript-tutorials/nodejs_png_images/Node.js-11.png',
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
