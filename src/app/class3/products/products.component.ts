import { Component, OnChanges, OnInit } from '@angular/core';
import { LogService } from 'src/app/global/log.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: { name: string; price: string }[] = [];
  name = 'raj';
  constructor(private srvLog: LogService) {}

  ngOnInit(): void {}

  saveProduct(data: any) {
    // console.log(data);
    this.products.push(data);
  }

  sayHello() {
    this.srvLog.logHello();
  }
}
