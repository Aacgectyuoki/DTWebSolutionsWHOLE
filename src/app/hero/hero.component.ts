import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typewriterHeading1') typewriterHeading1!: ElementRef;
  @ViewChild('typewriterHeading2') typewriterHeading2!: ElementRef;
  @ViewChild('typewriterText') typewriterText!: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    await this.typewriterEffect(this.typewriterHeading1.nativeElement, "Web", () => {
      this.typewriterEffect(this.typewriterHeading2.nativeElement, "Developer", () => {
        this.typewriterEffect(this.typewriterText.nativeElement, 
          "I am committed to not only satisfying my clients' immediate needs but also providing insights and solutions that bring long-term benefits. With my web development skills, I can help enhance your online presence, improve user experience, and ultimately drive more traffic and growth for your business.", 
          undefined, 30);
      }, 400);
    }, 400);
  }

  async typewriterEffect(element: HTMLElement, text: string, onComplete?: () => void, interval: number = 100): Promise<void> {
    let index = 0;

    return new Promise<void>((resolve) => {
      const intervalId = setInterval(() => {
        element.textContent += text[index];
        index++;

        if (index === text.length) {
          clearInterval(intervalId);
          resolve();
          if (onComplete) {
            onComplete();
          }
        }
      }, interval);
    });
  }
}
