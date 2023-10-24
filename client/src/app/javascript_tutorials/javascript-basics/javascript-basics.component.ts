import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-basics',
  templateUrl: './javascript-basics.component.html',
  styleUrls: ['./javascript-basics.component.css']
})
export class JavascriptBasicsComponent implements OnInit {

  images: string[] = [
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page1.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page2.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page3.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page4.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page5.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page6.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page7.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page8.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page9.png',
    './assets/javascript-tutorials/javascript_basics_png_images/JavaScript_Basics_Cheat_Sheet_Page10.png',
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
