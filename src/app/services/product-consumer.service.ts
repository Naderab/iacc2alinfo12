import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/core/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductConsumerService {

  urlProduct: string = environment.apiUrl + '/products';
  constructor(private http:HttpClient) { }

  getAllProducts() { 
    return this.http.get<Product[]>(this.urlProduct);
  }
  getProductById(id: number) { 
    return this.http.get(this.urlProduct + '/' + id);
  }
  addProduct(product: Product) {
    return this.http.post(this.urlProduct,product);
  }
  updateProduct(product: Product) {
    return this.http.put(this.urlProduct + '/' + product.id, product);
   }
  deleteProduct(id: number) {
    return this.http.delete(this.urlProduct + '/' + id);
  }
}
