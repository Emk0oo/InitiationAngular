import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseLink',
  standalone: true
})
export class ParseLinkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
