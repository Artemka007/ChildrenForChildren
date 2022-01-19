import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[cfcAutogrow]'
})
export class AutogrowDirective implements OnInit {
  @Input()
  cfcAutogrow?: string

  constructor(private elementRef: ElementRef<HTMLTextAreaElement | HTMLInputElement>) { }

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, 'input')
      .subscribe(data => {
        this.changeHeight()
      })
  }

  changeHeight() {
    this.elementRef.nativeElement.style.overflow = 'hidden'
    this.elementRef.nativeElement.style.height = '0px'
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px'
  }

}
