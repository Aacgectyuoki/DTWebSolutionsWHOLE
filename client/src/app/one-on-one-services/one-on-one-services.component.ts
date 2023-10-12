import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-on-one-services',
  templateUrl: './one-on-one-services.component.html',
  styleUrls: ['./one-on-one-services.component.css']
})
export class OneOnOneServicesComponent {
  service: any = {}; // Initialize an empty object to hold the form data

  constructor(private http: HttpClient) {}

  bookService() {
    // Assuming your backend API endpoint is '/api/submit-service'
    const apiUrl = '/api/submit-service';

    this.http.post(apiUrl, this.service).subscribe(
      (response) => {
        console.log('Form data sent successfully:', response);
        // Optionally, reset the form or navigate to a success page.
        this.clearForm();
      },
      (error) => {
        console.error('Error sending form data:', error);
      }
    );
  }

  clearForm() {
    // This function clears the form fields after booking a service.
    this.service = {};
  }

}

