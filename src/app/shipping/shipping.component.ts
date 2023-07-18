import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // 注入服务
  constructor(private cartService: CartService) {
    this.ngOnInit();
  }

  // 此处!的用法跟?其实比较类似，都是一种选择链，只不过?是检查之前的元素是否为undefined或者是null，!则是检查之后的元素是否是undefined或者是null，如果是undefined，程序不会报错，会继续执行

  // Observable 会返回一个通过远程调用方法的返回值，类似于axios里面的response
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrice();
  }
}
