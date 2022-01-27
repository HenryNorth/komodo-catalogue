import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Vehicle, VehicleBodyType, VehicleBodyTypes } from './models/vehicle.model';
import * as _ from 'underscore';
import { vehicles } from 'src/assets/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchControl = new FormControl('');
  searchValue = '';

  VehicleBodyTypes = VehicleBodyTypes;
  selectedBodyTypes: VehicleBodyType[] = [];

  minPriceControl = new FormControl();
  minPriceValue = 0;

  sortByValue: 'priceAsc' | 'priceDesc' | 'name' = 'name';

  vehicles: Vehicle[] = [];

  constructor() {
    this.searchControl.valueChanges.pipe().subscribe(value => {
      this.searchValue = value;
      this.filterVehicles();
    });
    this.minPriceControl.valueChanges.pipe().subscribe(value => {
      this.minPriceValue = value;
      this.filterVehicles();
    });
  }

  ngOnInit(): void {
    this.filterVehicles();
  }

  onChangeSort(event: any) {
    this.sortByValue = event;
    this.filterVehicles();
  }

  filterVehicles() {
    const filteredVehicles = vehicles.filter(vehicle => {
      const searchResult = vehicle.name.toLowerCase().includes(this.searchValue?.toLowerCase());
      const minPriceResult = vehicle.price >= this.minPriceValue;
      let bodyTypeResult = true;
      if (this.selectedBodyTypes && this.selectedBodyTypes.length) {
        bodyTypeResult = this.selectedBodyTypes.includes(vehicle.bodyType);
      }

      return searchResult && minPriceResult && bodyTypeResult;
    });
    if (this.sortByValue === 'priceAsc') {
      this.vehicles = _.sortBy(filteredVehicles, 'price');
    } else if (this.sortByValue === 'priceDesc') {
      this.vehicles = _.sortBy(filteredVehicles, 'price').reverse();
    } else {
      this.vehicles = _.sortBy(filteredVehicles, 'name').reverse();
    }
  }
}
