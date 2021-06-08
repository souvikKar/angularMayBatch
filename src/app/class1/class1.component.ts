import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class1',
  templateUrl: './class1.component.html',
  styleUrls: ['./class1.component.css'],
})
export class Class1Component implements OnInit {
  greet = false;
  status = '';
  constructor() {}

  ngOnInit(): void {}

  greetToggler() {
    this.greet = !this.greet;
    // alert(this.greet);
  }

  checkSpeed(speed: string) {
    // console.log(speed);

    if (+speed <= 40) {
      this.status = 'you are okay with speed';
    } else if (+speed > 40) {
      this.status = 'you are over limit';
    }
  }
}
