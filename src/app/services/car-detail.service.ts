import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModule } from '../models/listResponseModule';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:7233/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModule<CarDetail>> {
    let newPath = this.apiUrl + 'getcardetails';
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
}
