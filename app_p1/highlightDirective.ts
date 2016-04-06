import { Directive, ElementRef, Input } from 'angular2/core';

@Directive({
    selector: '[highlight]',
    host: {
        '(mouseenter)':'onMouseEnter()',
        '(mouseleave)':'onMouseLeave()',
    }
})
export class HighlightDirective{
    private originalBackground;

    @Input() hoverColor;

    constructor(private el:ElementRef){
        this.originalBackground = el.nativeElement.style.backgroundColor;
    }

    onMouseEnter(){
        this.el.nativeElement.style.backgroundColor = this.hoverColor;
    }

    onMouseLeave(){
        this.el.nativeElement.style.backgroundColor = this.originalBackground;
    }
}