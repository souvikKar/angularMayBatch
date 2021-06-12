import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  products: { name: string; price: string }[] = [];
  name = '';
  price = '';

  @Output() onProductAdded = new EventEmitter<{
    name: string;
    price: string;
  }>();

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('onInit called');
  }

  ngOnDestroy() {
    console.log('destroyed');
  }

  setName(nm: string) {
    this.name = nm;
  }
  setPrice(price: string) {
    this.price = price;
  }

  onAddProduct() {
    // console.log(this.name, this.price);
    const item = { name: this.name, price: this.price };
    // this.products.push(item);
    // console.log(this.products);
    this.onProductAdded.emit(item);
  }
}
