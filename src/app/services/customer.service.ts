import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModule } from '../models/customerResponseModule';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:7233/api/customers/getall';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModule> {
    return this.httpClient.get<CustomerResponseModule>(this.apiUrl);
  }
}
