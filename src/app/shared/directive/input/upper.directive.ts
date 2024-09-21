import { Directive, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUpper]',
  standalone : true,
})
export class UpperDirective {

  private control = inject(NgControl);

  @HostListener('input',['$event.target'])
  public onInput(input:HTMLInputElement):void {
      const caretPos:any = input.selectionStart;
      this.control.control?.setValue(input.value.toUpperCase());
      input.setSelectionRange(caretPos, caretPos);
  }
  

}
