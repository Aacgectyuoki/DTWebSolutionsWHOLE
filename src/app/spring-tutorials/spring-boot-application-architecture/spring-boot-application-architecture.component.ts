import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-boot-application-architecture',
  templateUrl: './spring-boot-application-architecture.component.html',
  styleUrls: ['./spring-boot-application-architecture.component.css']
})
export class SpringBootApplicationArchitectureComponent implements OnInit {

  images: string[] = [
    './assets/spring-tutorials/spring-boot-component-architecture_png/Spring_Boot_Application_Architecture_Components_and_Their_Roles.png',
    // Add more image paths
  ];

  // // Handle the right and left arrow key press
  // @HostListener('window:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.key === 'ArrowRight') {
  //     this.nextImage();
  //   } else if (event.key === 'ArrowLeft') {
  //     this.prevImage();
  //   }
  // }

  currentImage: string = this.images[0];

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
