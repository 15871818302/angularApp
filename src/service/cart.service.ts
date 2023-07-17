import { Injectable } from '@angular/core';
import { Product } from 'src/list/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  // 添加购物车的方法
  addToCart(product: Product) {
    this.items.push(product);
  }
  // 获取当前购物车列表
  getItems() {
    return this.items;
  }
  // 清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }
  // 从其他文件中获取数据
  getShippingPrice() {
    return this.http.get<{ type: string; price: number }>(
      '/src/assets/shipping.json',
    );
  }
  constructor(private http: HttpClient) {}
}
