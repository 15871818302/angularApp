import { Component, OnInit } from '@angular/core';
import { Product } from 'src/list/product';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {
    this.ngOnInit();
  }

  public items: Product | any;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }
}
