import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{

  products: Product[]=[];
  constructor(private pS: ProductService) { }
  ngOnInit(): void {
      this.products = this.pS.getProducts();
  }
  
  title: string = 'Products List';
  color:string=''
  product: Product = {
    id: '1',
    name: 'phone',
    price: 2000,
    quantity: 5,
  };

  // products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'phone',
  //     price: 2000,
  //     quantity: 5,
  //   },
  //   {
  //     id: '2',
  //     name: 'tv',
  //     price: 1500,
  //     quantity: 0,
  //   },
  //   {
  //     id: '3',
  //     name: 'PC',
  //     price: 3000,
  //     quantity: 3,
  //   },
  // ];

  getState(p: Product) {
    console.log(p);
    if (p.quantity != 0) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

  Acheter(p: Product) {
    p.quantity--;
  }

  getColor() {
    return this.color;
  }
}
