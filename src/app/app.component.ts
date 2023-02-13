import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bill-product';
  quantity: number;
  cost: number;
  products: object;

  constructor() {
    this.quantity = 1;
    this.cost = 0;
    this.products = [];
  }
}
git