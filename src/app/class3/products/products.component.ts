import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    { name: 'Nokia', price: '20' },
    { name: 'Samsung', price: '40' },
    { name: 'Motorala', price: '340' },
    { name: 'Lava', price: '330' },
    { name: 'LG', price: '670' },
    { name: 'One Plus', price: '90' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
