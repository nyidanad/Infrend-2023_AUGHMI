import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VehicleDTO } from 'model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicleForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    type: this.formBuilder.control(''),
    brand: this.formBuilder.control(''),
    regNum: this.formBuilder.control(''),
    purchaseDate: this.formBuilder.control(new Date()),
    rentalFee: this.formBuilder.control(0),
    mileage: this.formBuilder.control(0),
    status: this.formBuilder.control(''),
    imgUrl: this.formBuilder.control(''),
  });

  isNewVehicle = true;

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewVehicle = false;

      this.vehicleService.getOne(id).subscribe({
        next: (vehicle) => {
          this.vehicleForm.setValue(vehicle);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba a járműadatok betöltésekor.', 'Hiba');
        }
      });
    }
  }

  save() {
    const vehicle = this.vehicleForm.value as VehicleDTO;

    if (this.isNewVehicle) {
      this.vehicleService.create(vehicle).subscribe({
        next: (insertedVehicle) => {
          this.toastrService.success('Sikeres mentés, azonosító: ' + insertedVehicle.id, 'Siker');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt mentéskor.', 'Hiba');
        }
      })
    }
    else {
      this.vehicleService.update(vehicle).subscribe({
        next: () => {
          this.toastrService.success('Sikeres módosítás.', 'Siker');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt módosításkor.', 'Hiba');
        }
      })
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  compareObjects(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id == obj2.id;
  }
}