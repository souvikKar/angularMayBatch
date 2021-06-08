import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[makeItRed]',
})
export class MakeItRedDirective {
  constructor(elRef: ElementRef) {
    elRef.nativeElement.style.color = '#f00';
    // elRef.nativeElement.style.display = 'none';
  }
}
