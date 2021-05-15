import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  /** simple closing and opening of dropdown x
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  **/

  /** 
  Closing the Dropdown From Anywhere
  as we are using ElementRef, we have to add it in constructor to later use it
  */
     
      @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
    
      constructor(private elRef: ElementRef) {}
    
}
