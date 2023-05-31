import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerDTO } from 'model';
import { CustomerService } from 'src/app/service/customer.service';
import { FilterVehiclePipe } from 'src/app/pipe/filter-vehicle.pipe';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [FilterVehiclePipe]
})
export class CustomerListComponent {

  customers!: CustomerDTO[];
  filteredString: string = '';

  constructor (
    private router: Router,
    private customerService: CustomerService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
        console.log(customers);
      },
      error: (err) => console.error(err)
    });
  }

  create() {
    this.router.navigate(['/customer-form']);
  }

  edit(customer: CustomerDTO) {
    this.router.navigate([ '/customer-form', customer.id ]);
  }

  delete(customer: CustomerDTO) {
    this.customerService.delete(customer.id).subscribe({
      next: () => {
        const index = this.customers.indexOf(customer);
        if (index > -1) {
          this.customers.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a törléskor.', 'Hiba');
      }
    });
  }
}
