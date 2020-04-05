import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appSetColorGenre]'
})

export class SetColorGenreDirective {
  @Input() private appSortByDate: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2){
    console.log(this.elementRef.nativeElement.innerHTML);
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
}

}
