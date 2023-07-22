import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModule } from '../models/carResponseModule';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7233/api/cars/getcardetails';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModule> {
    return this.httpClient.get<CarResponseModule>(this.apiUrl);
  }
}
