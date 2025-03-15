export enum PropertyType {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  LOT = 'lot',
}

export enum PropertyStatus {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  SOLD = 'sold',
}

export class Property {
  id?: string;
  type: PropertyType;
  description: string;
  price: number;
  status: PropertyStatus;
  sellerId: string;
  createdAt?: Date;
}
