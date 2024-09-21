import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper',
  standalone: true,
})
export class FirstUpperPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase());
  }
}
