import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModule';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:7233/api/brands/getall';

  constructor(private httpclient: HttpClient) {}

  getBrands(): Observable<ListResponseModule<Brand>> {
    return this.httpclient.get<ListResponseModule<Brand>>(this.apiUrl);
  }
}
