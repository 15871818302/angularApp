import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/list/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  // 该装饰器用于接收值
  @Input() product: Product | undefined
  // 该装饰器用于输出值，并且可以绑定一个新的事件，用于触发函数
  @Output() notify = new EventEmitter()
  
}
