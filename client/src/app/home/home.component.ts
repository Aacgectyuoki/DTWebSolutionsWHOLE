import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('countAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  happyClientsCount: number = 0; // Initialize the count

  // Assume you have a data structure for testimonials with a 'satisfaction' property
  testimonials = [
    { content: 'Great service!', satisfaction: 'happy' },
    { content: 'Awesome experience!', satisfaction: 'happy' },
    { content: 'Could be better...', satisfaction: 'neutral' },
    { content: 'Great service!', satisfaction: 'happy' },
    { content: 'Awesome experience!', satisfaction: 'happy' },
    { content: 'Could be better...', satisfaction: 'neutral' },
    // Add more testimonials as needed
  ];

  scrollTo(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);

    if (element) {
      // Use the smooth scroll behavior
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Calculate the happy clients count
  calculateHappyClientsCount(): void {
    this.happyClientsCount = this.testimonials.filter(testimonial => testimonial.satisfaction === 'happy').length;
  }

  // Call the calculateHappyClientsCount method when the component initializes
  ngOnInit(): void {
    // Simulate the counting animation
    this.animateCount();
  }

  // Use Angular animations to increment the count with a smooth transition
  animateCount(): void {
    this.calculateHappyClientsCount();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
