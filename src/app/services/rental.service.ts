import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModule';
import { Rental } from '../models/rental';
@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:7233/api/rentals/getrentaldetails';

  constructor(private httpCLient: HttpClient) {}

  getRentals(): Observable<ListResponseModule<Rental>> {
    return this.httpCLient.get<ListResponseModule<Rental>>(this.apiUrl);
  }
}
