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

  onNotify() {
    console.log("father component is clicked");
  }

  protected readonly products = products;
}
