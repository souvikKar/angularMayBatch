import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Categories } from '../../../global/Models/Categories.model';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css'],
})
export class CategoryListingComponent implements OnInit, OnChanges {
  // @Input() dbCategories: { name: string; price: string }[] = [];
  dbCategories: Categories[] = [];

  constructor(private srvCategory: CategoryService) {}

  ngOnInit(): void {
    this.dbCategories = this.srvCategory.categories;
  }

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
