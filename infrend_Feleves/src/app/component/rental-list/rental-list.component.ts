import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentalDTO } from 'model';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent {

  rentals!: RentalDTO[];

  constructor (
    private router: Router,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.rentalService.getAll().subscribe({
      next: (retals) => {
        this.rentals = retals;
        console.log(retals);
      },
      error: (err) => console.error(err)
    });
  }

  create() {
    this.router.navigate(['/rental-form']);
  }

  edit(rental: RentalDTO) {
    this.router.navigate(['/rental-form', rental.id ]);
  }

  delete(rental: RentalDTO) {
    this.rentalService.delete(rental.id).subscribe({
      next: () => {
        const index = this.rentals.indexOf(rental);
        if (index > -1) {
          this.rentals.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a törléskor.', 'Hiba');
      }
    });
  }
}
