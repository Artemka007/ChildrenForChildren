import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor (protected sanitaizer: DomSanitizer) { }

  transform(value: string): any {
    return this.sanitaizer.bypassSecurityTrustHtml(value)
  }

}
