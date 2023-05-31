import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDTO } from 'model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RentalDTO[]>('/api/rentals');
  }

  getOne(id: number) {
    return this.http.get<RentalDTO>('/api/rentals/' + id);
  }

  create(rental: RentalDTO) {
    return this.http.post<RentalDTO>('/api/rentals', rental);
  }

  update(rental: RentalDTO) {
    return this.http.put<RentalDTO>('/api/rentals', rental);
  }

  delete(id: number) {
    return this.http.delete('/api/rentals/' + id);
  }
}