import { Component } from '@angular/core';
import { products } from '../../list/product';

@Component({
  selector: 'app-product',
  templateUrl: 'product.html',
  styleUrls: ['product.css'],
})
export class ProductComponent {
  product = [...products];

  share() {
    console.log('product is shared');
  }

  protected readonly products = products;
}
