import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModule';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:7233/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImages(): Observable<ListResponseModule<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getall';
    return this.httpClient.get<ListResponseModule<CarImage>>(newPath);
  }
  getCarImagesByCar(carId: number): Observable<ListResponseModule<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getimagebycarId?carid=' + carId;
    return this.httpClient.get<ListResponseModule<CarImage>>(newPath);
  }
}
