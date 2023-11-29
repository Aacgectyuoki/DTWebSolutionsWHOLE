import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl: string = `${environment.apiBaseUrl}/api/submit-service`;
  private apiUrl: string = `${environment.apiBaseUrl}/submit-service`;

  constructor(private http: HttpClient) {}

  submitService(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}