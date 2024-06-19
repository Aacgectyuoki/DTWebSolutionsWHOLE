import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-aws-categorized-and-defined',
  templateUrl: './aws-categorized-and-defined.component.html',
  styleUrls: ['./aws-categorized-and-defined.component.css']
})
export class AwsCategorizedAndDefinedComponent implements OnInit {

  images: string[] = [
    './assets/aws-tutorials/Amazon_Web_Services_(AWS)_Categorized_&_Defined-1.png',
    './assets/aws-tutorials/Amazon_Web_Services_(AWS)_Categorized_&_Defined-2.png',
    './assets/aws-tutorials/Amazon_Web_Services_(AWS)_Categorized_&_Defined-3.png',
    './assets/aws-tutorials/Amazon_Web_Services_(AWS)_Categorized_&_Defined-4.png',
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
