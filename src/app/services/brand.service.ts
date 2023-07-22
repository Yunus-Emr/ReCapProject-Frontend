import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModule } from '../models/brandResponseModule';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:7233/api/brands/getall';

  constructor(private httpclient: HttpClient) {}

  getBrands(): Observable<BrandResponseModule> {
    return this.httpclient.get<BrandResponseModule>(this.apiUrl);
  }
}
