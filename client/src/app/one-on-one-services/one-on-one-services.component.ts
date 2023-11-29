import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-one-on-one-services',
  templateUrl: './one-on-one-services.component.html',
  styleUrls: ['./one-on-one-services.component.css']
})
export class OneOnOneServicesComponent {
  service: any = {}; // Initialize an empty object to hold the form data

  constructor(private http: HttpClient, private apiService: ApiService) {}

  bookService() {
    // this.apiService.submitService(this.service).subscribe(
    //   (response) => {
    //     console.log('Form data sent successfully:', response);
    //     this.clearForm();
    //     // Optionally, display a success message or navigate to a success page.
    //   },
    //   (error) => {
    //     console.error('Error sending form data:', error);
    //     // Optionally, display an error message to the user.
    //   }
    // );
    // Assuming your backend API endpoint is '/api/submit-service'
    // const apiUrl = 'http://localhost:9000/api/submit-service';
    const apiUrl: string = `${environment.apiBaseUrl}/.netlify/functions/submit-service`;


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

