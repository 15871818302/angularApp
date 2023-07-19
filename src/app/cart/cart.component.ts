import { Component, OnInit } from '@angular/core';
import { Product } from 'src/list/product';
import { CartService } from 'src/service/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // 在构造类中注入变量
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.ngOnInit();
  }

  public items: Product | any;
  // 创建表单项
  public checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  })

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart()
    console.log("your order has been submitted");
    this.checkoutForm.reset()
  }
}
