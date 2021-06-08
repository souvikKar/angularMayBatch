import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-ngfor',
  templateUrl: './class-ngfor.component.html',
  styleUrls: ['./class-ngfor.component.css'],
})
export class ClassNgforComponent implements OnInit {
  products = [
    { id: 1, name: 'a', price: 20 },
    { id: 2, name: 'b', price: 40 },
    { id: 3, name: 'c', price: 340 },
    { id: 4, name: 'd', price: 330 },
    { id: 5, name: 'e', price: 670 },
    { id: 6, name: 'f', price: 90 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
