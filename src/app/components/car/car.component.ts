import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carDetails: CarDetail[] = [];
  baseUrl: string = 'https://localhost:7233/files/';
  filterText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsDetailByBrand(brandId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsDetailByColor(colorId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarImageUrl(imagePath: string): string {
    if (imagePath !== null) {
      return this.baseUrl + imagePath;
    }
    return this.baseUrl + 'DefaultImage.jpg';
  }
}
