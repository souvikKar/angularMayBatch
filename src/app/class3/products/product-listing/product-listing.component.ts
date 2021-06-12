import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit, OnChanges {
  @Input() dbProducts: { name: string; price: string }[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('onChanges');
  }

  checkOffer(price: number) {
    if (price < 100) return true;
    else return false;
  }

  getText(price: number) {
    if (price < 100) return 'Offer';
    else return 'Normal';
  }
}
