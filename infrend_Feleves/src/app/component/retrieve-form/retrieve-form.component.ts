import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerDTO, RentalDTO, VehicleDTO, RetrieveDTO } from 'model';
import { RetrieveService } from 'src/app/service/retrieve.service';
import { RentalService } from 'src/app/service/rental.service';
import { CustomerService } from 'src/app/service/customer.service';
import { VehicleService } from 'src/app/service/vehicle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-retrieve-form',
  templateUrl: './retrieve-form.component.html',
  styleUrls: ['./retrieve-form.component.css']
})
export class RetrieveFormComponent {
  retrieveForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    retrieveDate: this.formBuilder.control(new Date()),
    retrieveMileage: this.formBuilder.control(0),
    damaged: this.formBuilder.control(false),
    sum: this.formBuilder.control(0),
    rentals: this.formBuilder.control<RentalDTO | null>(null),
    customers: this.formBuilder.control<CustomerDTO | null>(null),
    vehicles: this.formBuilder.control<VehicleDTO | null>(null),
  });

  isNewRetrieve = true;

  retrieves!: RetrieveDTO[];
  rentals!: RentalDTO[];
  customers!: CustomerDTO[];
  vehicles!: VehicleDTO[];

  constructor (
    private router: Router,
    private retrieveService: RetrieveService,
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
      this.isNewRetrieve = false;

      this.retrieveService.getOne(id).subscribe({
        next: (retrieve) => {
          this.retrieveForm.setValue(retrieve);
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

    this.rentalService.getAll().subscribe({
      next: (rentals) => this.rentals = rentals,
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a kölcsönzések betöltésekor.', 'Hiba');
      }
    });
  }

  save() {
    const retrieve = this.retrieveForm.value as RetrieveDTO;

    if (this.isNewRetrieve) {
      this.retrieveService.create(retrieve).subscribe({
        next: (insertedRetrieve) => {
          this.toastrService.success('Sikeres mentés, azonosító: ' + insertedRetrieve.id, 'Siker');
          this.router.navigate(['/retrieve-list']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt mentéskor.', 'Hiba');
        }
      })
    }
    else {
      this.retrieveService.update(retrieve).subscribe({
        next: () => {
          this.toastrService.success('Sikeres módosítás.', 'Siker');
          this.router.navigate(['/retrieve-list']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt módosításkor.', 'Hiba');
        }
      })
    }
  }

  cancel() {
    this.router.navigate(['/retrieve-list']);
  }

  compareObjects(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id == obj2.id;
  }

  Sum(): number {
    const retrieve = this.retrieveForm.value as RetrieveDTO;
    const rentalDays = this.Days(retrieve.retrieveDate, retrieve.rentals.rentalDate);
    const mileageDif = retrieve.retrieveMileage - retrieve.rentals.vehicles.mileage;
    let sum = rentalDays * mileageDif * retrieve.rentals.vehicles.rentalFee;
  
    if (retrieve.damaged) {
      sum += 15000;
    }
  
    return sum;
  }
  
  Days(date1: Date, date2: Date): number {
    const dif = Math.abs(date1.getTime() - date2.getTime());
    return Math.round(dif / (1000 * 60 * 60 * 24));
  }
}
