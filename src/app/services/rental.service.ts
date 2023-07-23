import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModule } from '../models/rentalResponseModule';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:7233/api/rentals/getrentaldetails';

  constructor(private httpCLient: HttpClient) {}

  getRentals(): Observable<RentalResponseModule> {
    return this.httpCLient.get<RentalResponseModule>(this.apiUrl);
  }
}
