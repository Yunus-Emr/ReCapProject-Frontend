import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModule';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7233/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModule<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCarsDetailByBrand(brandId: number): Observable<ListResponseModule<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCarsDetailByColor(colorId: number): Observable<ListResponseModule<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCarsDetailByCar(carId: number): Observable<ListResponseModule<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
}
