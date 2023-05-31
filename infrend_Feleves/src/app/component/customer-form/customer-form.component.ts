import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerDTO } from 'model';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    fname: this.formBuilder.control(''),
    lname: this.formBuilder.control(''),
    address: this.formBuilder.control(''),
    idCardNum: this.formBuilder.control(''),
    phone: this.formBuilder.control(''),
  });

  isNewCustomer = true;

  customers!: CustomerDTO[];

  constructor (
    private router: Router,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewCustomer = false;

      this.customerService.getOne(id).subscribe({
        next: (customer) => {
          this.customerForm.setValue(customer);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba a járműadatok betöltésekor.', 'Hiba');
        }
      });
    }
  }

  save() {
    const customer = this.customerForm.value as CustomerDTO;

    if (this.isNewCustomer) {
      this.customerService.create(customer).subscribe({
        next: (insertedCustomer) => {
          this.toastrService.success('Sikeres mentés, azonosító: ' + insertedCustomer.id, 'Siker');
          this.router.navigate(['/customer-list']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt mentéskor.', 'Hiba');
        }
      })
    }
    else {
      this.customerService.update(customer).subscribe({
        next: () => {
          this.toastrService.success('Sikeres módosítás.', 'Siker');
          this.router.navigate(['/customer-list']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt módosításkor.', 'Hiba');
        }
      })
    }
  }

  cancel() {
    this.router.navigate(['/customer-list']);
  }
}
