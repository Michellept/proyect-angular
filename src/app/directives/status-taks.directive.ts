import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusTaks]'
})
export class StatusTaksDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

   @Input() set appStatusTaks(completed: boolean) {
    if (!completed) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }
   }
    
}
