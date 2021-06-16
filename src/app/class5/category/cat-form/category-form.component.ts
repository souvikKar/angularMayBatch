import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CategoryService } from '../category.service';
import { Categories } from '../../../global/Models/Categories.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  categorys: Categories[] = [];
  name = '';
  price = '';

  constructor(private srvCategory: CategoryService) {
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

  onAddCategory() {
    const item = { name: this.name, price: this.price };
    this.srvCategory.saveCategory(item);
  }
}
