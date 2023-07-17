import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/list/product';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.ngOnInit();
  }

  public product: Product | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const paramsId = Number(routeParams.get('productId'));
    this.product = products.find((item) => item.id == paramsId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(`${product} is add to cart`);
  }
}
