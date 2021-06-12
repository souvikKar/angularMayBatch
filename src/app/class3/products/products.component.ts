import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: { name: string; price: string }[] = [];
  name = 'raj';
  constructor() {}

  ngOnInit(): void {}

  saveProduct(data: any) {
    // console.log(data);
    this.products.push(data);
  }
}
