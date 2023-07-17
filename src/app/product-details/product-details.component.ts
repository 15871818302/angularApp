import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/list/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product | undefined;

  constructor(private route: ActivatedRoute) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const paramsId = Number(routeParams.get('productId'));
    this.product = products.find((item) => item.id == paramsId);
  }
}
