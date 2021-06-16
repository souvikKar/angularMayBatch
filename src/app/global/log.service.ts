import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  logHello() {
    console.log('hello');
  }

  logHi() {
    console.log('Hi');
  }
}
