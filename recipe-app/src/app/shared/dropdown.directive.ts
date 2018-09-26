import {Directive, HostBinding, HostListener} from '@angular/core';

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
