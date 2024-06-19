import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-one-on-one-services',
  templateUrl: './one-on-one-services.component.html',
  styleUrls: ['./one-on-one-services.component.css']
})
export class OneOnOneServicesComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadCalendlyBadge();
  }

  loadCalendlyBadge(): void {
    // Load Calendly CSS
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'href', 'https://assets.calendly.com/assets/external/widget.css');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, link);

    // Load Calendly JS
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'src', 'https://assets.calendly.com/assets/external/widget.js');
    this.renderer.setAttribute(script, 'type', 'text/javascript');
    this.renderer.setAttribute(script, 'async', 'true');
    this.renderer.appendChild(document.body, script);

    // Initialize Calendly badge widget after script is loaded
    script.onload = () => {
      // @ts-ignore
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/maxdell220/meeting-with-max',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined
      });
    };
  }
}

  // bookService() {
  //   this.apiService.submitService(this.service).subscribe(
  //     (response) => {
  //       console.log('Form data sent successfully:', response);
  //       // Optionally, reset the form or navigate to a success page.
  //       this.clearForm();
  //     },
  //     (error) => {
  //       console.error('Error sending form data:', error);
  //     }
  //   );
  // }

  // clearForm() {
  //   // This function clears the form fields after booking a service.
  //   this.service = {};
  // }

  
  // bookService() {
  //   // Assuming your backend API endpoint is '/api/submit-service'
  //   const apiUrl = 'http://localhost:4000/api/submit-service';
  //   // const apiUrl: string = `${environment.apiBaseUrl}/submit-service`;


  //   this.http.post(apiUrl, this.service).subscribe(
  //     (response) => {
  //       console.log('Form data sent successfully:', response);
  //       // Optionally, reset the form or navigate to a success page.
  //       this.clearForm();
  //     },
  //     (error) => {
  //       console.error('Error sending form data:', error);
  //     }
  //   );
  // }

  // clearForm() {
  //   // This function clears the form fields after booking a service.
  //   this.service = {};
  // }

