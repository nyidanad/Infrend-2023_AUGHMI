import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVehicle'
})
export class FilterVehiclePipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const vehicles = [];
    for (const vehicle of value) {
      if (vehicle['type'] === filteredString) {
        vehicles.push(vehicle);
      }

      else if (vehicle['brand'] === filteredString) {
        vehicles.push(vehicle);
      }

      else if (vehicle['regNum'] === filteredString) {
        vehicles.push(vehicle);
      }
    }

    return vehicles;
  }
}
