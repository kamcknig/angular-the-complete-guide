import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') toggleOpen: boolean = false;

  constructor() { }

  @HostListener('click')
  onClick() {
    this.toggleOpen = !this.toggleOpen;
  }
}
