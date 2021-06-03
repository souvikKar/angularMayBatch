import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  name = 'raj';
  showBox = true;

  constructor() {}

  ngOnInit(): void {}

  logName() {
    // console.log((<HTMLInputElement>event.target).value);
    console.log(this.name);
  }

  // logName2(event: Event) {
  //   // console.log((<HTMLInputElement>event.target).value);
  //   console.log(this.name);
  // }

  hide() {
    this.showBox = false;
  }

  toggle() {
    // if (this.showBox == true) {
    //   this.showBox = false;
    // } else {
    //   this.showBox = true;
    // }

    this.showBox = !this.showBox;
  }
}
