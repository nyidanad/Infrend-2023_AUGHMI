import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './component/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './component/vehicle-form/vehicle-form.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { RentalListComponent } from './component/rental-list/rental-list.component';
import { RentalFormComponent } from './component/rental-form/rental-form.component';

const routes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'vehicle-form', component: VehicleFormComponent },
  { path: 'vehicle-form/:id', component: VehicleFormComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-form/:id', component: CustomerFormComponent },
  { path: 'rental-list', component: RentalListComponent },
  { path: 'rental-form', component: RentalFormComponent },
  { path: 'rental-form/:id', component: RentalFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
