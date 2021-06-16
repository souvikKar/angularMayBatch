import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  categories: { name: string; price: string }[] = [];

  saveCategory(data: any) {
    this.categories.push(data);
  }
}
