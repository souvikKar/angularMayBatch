import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-ngfor',
  templateUrl: './class-ngfor.component.html',
  styleUrls: ['./class-ngfor.component.css'],
})
export class ClassNgforComponent implements OnInit {
  products = [
    { id: 1, name: 'Nokia', price: 20 },
    { id: 2, name: 'Samsung', price: 40 },
    { id: 3, name: 'Motorala', price: 340 },
    { id: 4, name: 'Lava', price: 330 },
    { id: 5, name: 'LG', price: 670 },
    { id: 6, name: 'One Plus', price: 90 },
  ];

  constructor() {}

  ngOnInit(): void {}

  checkOffer(price: number) {
    if (price < 100) return true;
    else return false;
  }

  getText(price: number) {
    if (price < 100) return 'Offer';
    else return 'Normal';
  }
}
