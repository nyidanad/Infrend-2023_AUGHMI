import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleDTO } from 'model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'src/app/service/vehicle.service';
import { FilterVehiclePipe } from 'src/app/pipe/filter-vehicle.pipe';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  providers: [FilterVehiclePipe]
})
export class VehicleListComponent implements OnInit {

  vehicles!: VehicleDTO[];
  filteredString: string = '';

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe({
      next: (vehicles) => {
        this.vehicles = vehicles;
        console.log(vehicles);
      },
      error: (err) => console.error(err)
    });
  }

  create() {
    this.router.navigate(['/vehicle-form']);
  }

  edit(vehicle: VehicleDTO) {
    this.router.navigate([ '/vehicle-form', vehicle.id ]);
  }

  delete(vehicle: VehicleDTO) {
    this.vehicleService.delete(vehicle.id).subscribe({
      next: () => {
        const index = this.vehicles.indexOf(vehicle);
        if (index > -1) {
          this.vehicles.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a törléskor.', 'Hiba');
      }
    });
  }
}