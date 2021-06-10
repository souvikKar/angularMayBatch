import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  products: { name: string; price: string }[] = [];
  name = '';
  price = '';
  constructor() {}

  ngOnInit(): void {}

  setName(nm: string) {
    this.name = nm;
  }
  setPrice(price: string) {
    this.price = price;
  }

  onAddProduct() {
    // console.log(this.name, this.price);
    const item = { name: this.name, price: this.price };
    this.products.push(item);
    console.log(this.products);
  }
}
