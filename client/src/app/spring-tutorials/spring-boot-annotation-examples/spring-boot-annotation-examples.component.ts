import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-boot-annotation-examples',
  templateUrl: './spring-boot-annotation-examples.component.html',
  styleUrls: ['./spring-boot-annotation-examples.component.css']
})
export class SpringBootAnnotationExamplesComponent implements OnInit {

  images: string[] = [
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-1.png',
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-2.png',
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-3.png',
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-4.png',
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-5.png',
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-6.png',
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-7.png',
    './assets/spring-tutorials/spring-boot-annotation-examples_png/Spring_Boot_Annotation_Examples-8.png',
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
