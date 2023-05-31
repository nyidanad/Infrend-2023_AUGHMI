import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleDTO } from 'model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<VehicleDTO[]>('/api/vehicles');
  }

  getOne(id: number) {
    return this.http.get<VehicleDTO>('/api/vehicles/' + id);
  }

  create(vehicle: VehicleDTO) {
    return this.http.post<VehicleDTO>('/api/vehicles', vehicle);
  }

  update(vehicle: VehicleDTO) {
    return this.http.put<VehicleDTO>('/api/vehicles', vehicle);
  }

  delete(id: number) {
    return this.http.delete('/api/vehicles/' + id);
  }
}