import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/product';
import { ProductService } from '../services/product.service';
import { ProductConsumerService } from '../services/product-consumer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private pS: ProductService,
    private productConsumer: ProductConsumerService
  ) {}
  ngOnInit(): void {
    //this.products = this.pS.getProducts();
    this.productConsumer.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (error) => console.log(error),
    });
  }

  title: string = 'Products List';
  color: string = '';
  // product: Product = {
  //   id: '1',
  //   name: 'phone',
  //   price: 2000,
  //   quantity: 5,
  // };

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

  delete(id: number) {
    this.productConsumer.deleteProduct(id).subscribe({
      next: (data) => {
        let index = this.products.findIndex((p) => p.id == id);
        this.products.splice(index, 1);
      },
      error:(error)=>console.log(error)
    })
  }
}
