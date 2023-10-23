import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-tutorials',
  templateUrl: './vc-tutorials.component.html',
  styleUrls: ['./vc-tutorials.component.css']
})
export class VcTutorialsComponent implements OnInit {

  images: string[] = [
    './assets/vc-tutorials/git_and_github_crash_course_png/Git_and_GitHub_Essentials_A_Crash_Course_for_Version_Control_and_Collaboration-1.png',
    './assets/vc-tutorials/git_and_github_crash_course_png/Git_and_GitHub_Essentials_A_Crash_Course_for_Version_Control_and_Collaboration-2.png',
    './assets/vc-tutorials/git_and_github_crash_course_png/Git_and_GitHub_Essentials_A_Crash_Course_for_Version_Control_and_Collaboration-3.png',
    './assets/vc-tutorials/git_and_github_crash_course_png/Git_and_GitHub_Essentials_A_Crash_Course_for_Version_Control_and_Collaboration-4.png',
    './assets/vc-tutorials/git_and_github_crash_course_png/Git_and_GitHub_Essentials_A_Crash_Course_for_Version_Control_and_Collaboration-5.png',
    './assets/vc-tutorials/git_and_github_crash_course_png/Git_and_GitHub_Essentials_A_Crash_Course_for_Version_Control_and_Collaboration-6.png',
    './assets/vc-tutorials/git_and_github_crash_course_png/Git_and_GitHub_Essentials_A_Crash_Course_for_Version_Control_and_Collaboration-7.png',
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
