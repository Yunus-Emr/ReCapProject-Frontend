import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModule } from '../models/listResponseModule';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:7233/api/colors/getall';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModule<Color>> {
    return this.httpClient.get<ListResponseModule<Color>>(this.apiUrl);
  }
}
