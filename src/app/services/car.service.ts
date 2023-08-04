import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModule } from '../models/listResponseModule';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7233/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
  getCarsDetailByBrand(brandId: number): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
  getCarsDetailByColor(colorId: number): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
}
