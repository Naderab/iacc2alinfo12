import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/product';
import { ProductConsumerService } from '../services/product-consumer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  product: Product = new Product();
  id!: number ;
  constructor(private _productConsumer: ProductConsumerService, private _router: Router, private _activated: ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
      this.id = this._activated.snapshot.params['id'];
    if (this.id !== undefined) {
        console.log(this.id)
        this._productConsumer.getProductById(this.id).subscribe({
          next: (data) => (this.product = data),
        });
      }
   }


  add(f:NgForm) {
    console.log(f.controls)
    if (this.id !== undefined) {
      this._productConsumer.updateProduct(this.product).subscribe({
        next: () => this._router.navigate(['/products']),
        error: (err) => console.log(err),
      });
    } else {
      this._productConsumer.addProduct(this.product).subscribe({
        next: () => this._router.navigate(['/products']),
        error: (err) => console.log(err),
      });
    }
  }

  getButtonMessage() {
    if (this.id !== undefined) {
      return 'Modifier';
    } else {
      return 'Ajouter';
    }
  }
}
