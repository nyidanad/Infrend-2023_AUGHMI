import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const customers = [];
    for (const customer of value) {
      if (customer['fname'] === filteredString) {
        customers.push(customer);
      }

      else if (customer['lname'] === filteredString) {
        customers.push(customer);
      }
    }
    return customers;
  }
}
