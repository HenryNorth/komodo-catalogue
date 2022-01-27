export interface Vehicle {
  id: number;
  name: string;
  imageUrls: string[];
  price: number;
  extraInfo: string;
  electric: boolean;
  doors: number;
  bodyType: VehicleBodyType;
  isSold: boolean;
}

export enum VehicleBodyType {
  Other = 0,
  Compact = 1,
  Sedan = 2,
  SUV = 3,
  Coupe = 4,
  Muscle = 5,
  SportsClassic = 6,
  Sports = 7,
  Super = 8,
  Motorcycle = 9,
  OffRoad = 10,
  Van = 11,
  Bicycle = 12
}

export const VehicleBodyTypes = [
  // {label: 'Other', value: VehicleBodyType.Other},
  {label: 'Compact', value: VehicleBodyType.Compact},
  {label: 'Sedan', value: VehicleBodyType.Sedan},
  {label: 'SUV', value: VehicleBodyType.SUV},
  {label: 'Coupe', value: VehicleBodyType.Coupe},
  {label: 'Muscle', value: VehicleBodyType.Muscle},
  {label: 'Sports Classic', value: VehicleBodyType.SportsClassic},
  {label: 'Sports', value: VehicleBodyType.Sports},
  {label: 'Super', value: VehicleBodyType.Super},
  {label: 'Motorcycle', value: VehicleBodyType.Motorcycle},
  {label: 'Off Road', value: VehicleBodyType.OffRoad},
  {label: 'Van', value: VehicleBodyType.Van},
  {label: 'Bicycle', value: VehicleBodyType.Bicycle},
]
