import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(items: any[], order: string = 'asc'): any[] {
    if (!items || items.length <= 1) return items;
    return items.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return order === 'desc' ? -comparison : comparison;
    });
  }
}

