import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './component/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './component/vehicle-form/vehicle-form.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { RentalListComponent } from './component/rental-list/rental-list.component';
import { RentalFormComponent } from './component/rental-form/rental-form.component';
import { RetrieveListComponent } from './component/retrieve-list/retrieve-list.component';
import { RetrieveFormComponent } from './component/retrieve-form/retrieve-form.component';
import { FilterVehiclePipe } from './pipe/filter-vehicle.pipe';
import { FilterCustomerPipe } from './pipe/filter-customer.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleFormComponent,
    CustomerFormComponent,
    CustomerListComponent,
    FilterVehiclePipe,
    FilterCustomerPipe,
    RentalListComponent,
    RentalFormComponent,
    RetrieveListComponent,
    RetrieveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }