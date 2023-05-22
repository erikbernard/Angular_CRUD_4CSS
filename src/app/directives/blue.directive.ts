import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[Blue]',
})
export class BlueDirective {
	constructor(private el: ElementRef) {
		el.nativeElement.style.color = '#3f51b5';
	}
}
