import { Component, OnChanges, OnInit } from '@angular/core';
import { LogService } from 'src/app/global/log.service';
import { CategoryService } from './category.service';
import { Categories } from '../../global/Models/Categories.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  name = 'raj';

  constructor(
    private srvLog: LogService,
    private srvCategory: CategoryService
  ) {}

  ngOnInit(): void {}

  saveCategory(data: Categories) {
    // console.log(data);
    this.srvCategory.saveCategory(data);
  }

  sayHello() {
    this.srvLog.logHello();
  }
}
