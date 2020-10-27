import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchemployee'
})
export class SearchemployeePipe implements PipeTransform {

  transform(items: any[], searchText: string): unknown {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
