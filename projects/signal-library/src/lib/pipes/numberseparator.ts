import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberseparator',
  standalone: true
})
export class NumSeparatorPipe implements PipeTransform {

transform(value: number): string {

  if (value === undefined || value === null || isNaN(value)) {
    return '';  // Jika bukan angka, kembalikan string kosong
  }

  const rx = /(\d+)(\d{3})/;
  return String(value).replace(/^\d+/, (w) => {
  let res = w;
  while (rx.test(res)) {
  res = res.replace(rx, '$1.$2');
  }
  return res;
  });

}

}