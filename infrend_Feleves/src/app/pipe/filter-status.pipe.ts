import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(items: any[], filteredString: string): any[] {
    return items.filter(item => item.status === filteredString);
  }
}
