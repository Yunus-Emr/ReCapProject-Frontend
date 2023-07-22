import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
