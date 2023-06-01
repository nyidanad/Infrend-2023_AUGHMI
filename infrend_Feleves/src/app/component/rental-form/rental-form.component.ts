import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerDTO, RentalDTO, VehicleDTO } from 'model';
import { RentalService } from 'src/app/service/rental.service';
import { CustomerService } from 'src/app/service/customer.service';
import { VehicleService } from 'src/app/service/vehicle.service';
import { ToastrService } from 'ngx-toastr';
import { FilterStatusPipe } from 'src/app/pipe/filter-status.pipe';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css'],
  providers: [FilterStatusPipe]
})
export class RentalFormComponent implements OnInit{
  rentalForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    rentalDate: this.formBuilder.control(new Date()),
    customers: this.formBuilder.control<CustomerDTO | null>(null),
    vehicles: this.formBuilder.control<VehicleDTO | null>(null)
  });

  isNewRental = true;
  filteredString: string = 'Szabad';

  rentals!: RentalDTO[];
  customers: CustomerDTO[] = [];
  vehicles: VehicleDTO[] = [];

  constructor (
    private router: Router,
    private rentalService: RentalService,
    private customerService: CustomerService,
    private vehicleService: VehicleService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewRental = false;

      this.rentalService.getOne(id).subscribe({
        next: (rental) => {
          this.rentalForm.setValue(rental);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba a kölcsönzések betöltésekor.', 'Hiba');
        }
      });
    }
    
    this.customerService.getAll().subscribe({
      next: (customers) => this.customers = customers,
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba az ügyfelek betöltésekor.', 'Hiba');
      }
    });

    this.vehicleService.getAll().subscribe({
      next: (vehicles) => this.vehicles = vehicles,
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a járműadatok betöltésekor.', 'Hiba');
      }
    });
  }

  save() {
    const rental = this.rentalForm.value as RentalDTO;

    if (this.isNewRental) {
      this.rentalService.create(rental).subscribe({
        next: (insertedRental) => {
          this.toastrService.success('Sikeres mentés, azonosító: ' + insertedRental.id, 'Siker');
          this.router.navigate(['/rental-list']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt mentéskor.', 'Hiba');
        }
      })
    }
    else {
      this.rentalService.update(rental).subscribe({
        next: () => {
          this.toastrService.success('Sikeres módosítás.', 'Siker');
          this.router.navigate(['/rental-list']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt módosításkor.', 'Hiba');
        }
      })
    }
  }

  cancel() {
    this.router.navigate(['/rental-list']);
  }

  compareObjects(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id == obj2.id;
  }
}
