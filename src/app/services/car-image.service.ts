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

  constructor(private httpclient: HttpClient) {}

  getCarImages(): Observable<ListResponseModule<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getall';
    return this.httpclient.get<ListResponseModule<CarImage>>(newPath);
  }
}
