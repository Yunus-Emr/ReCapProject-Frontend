import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModule } from '../models/colorResponseModule';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:7233/api/colors/getall';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModule> {
    return this.httpClient.get<ColorResponseModule>(this.apiUrl);
  }
}
