import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-tutorials',
  templateUrl: './react-tutorials.component.html',
  styleUrls: ['./react-tutorials.component.css']
})
export class ReactTutorialsComponent implements OnInit {

  images: string[] = [
    './assets/react-tutorials/react-basics/Getting_Started_with_React-01.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-02.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-03.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-04.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-05.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-06.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-07.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-08.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-09.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-10.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-11.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-12.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-13.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-14.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-15.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-16.png',
    './assets/react-tutorials/react-basics/Getting_Started_with_React-17.png'
    // Add more image paths
  ];

  // Handle the right and left arrow key press
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }

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
