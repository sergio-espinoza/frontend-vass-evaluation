import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appShow]' })
export class ShowDirective {
  @Input('appShow')
  public set showElementRef(externalShowElement: boolean) {
    if (this.showSelector === 'display') {
      const display = externalShowElement ? 'block' : 'none';
      this.el.nativeElement.style.display = display;
      return;
    }
    const visibility = externalShowElement ? 'visible' : 'hidden';
    this.el.nativeElement.style.visibility = visibility;
    return;
  }
  @Input() showSelector: 'display' | 'visibility' = 'display';

  constructor(
    private el: ElementRef
  ) { }
}
