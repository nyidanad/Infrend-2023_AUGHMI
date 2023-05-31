import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDTO } from 'model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CustomerDTO[]>('/api/customers');
  }

  getOne(id: number) {
    return this.http.get<CustomerDTO>('/api/customers/' + id);
  }

  create(customer: CustomerDTO): Observable<CustomerDTO> {
    return this.http.post<CustomerDTO>('/api/customers', customer);
  }

  update(customer: CustomerDTO) {
    return this.http.put<CustomerDTO>('/api/customers', customer);
  }

  delete(id: number) {
    return this.http.delete('/api/customers/' + id);
  }
}