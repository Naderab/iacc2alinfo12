import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {
        id: '1',
        name: 'phone',
        price: 2000,
        quantity: 5,
      },
      {
        id: '2',
        name: 'tv',
        price: 1500,
        quantity: 0,
      },
      {
        id: '3',
        name: 'PC',
        price: 3000,
        quantity: 3,
      },
    ];
  }
}
