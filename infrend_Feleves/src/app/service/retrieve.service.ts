import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetrieveDTO } from 'model';

@Injectable({
  providedIn: 'root'
})
export class RetrieveService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RetrieveDTO[]>('/api/retrieves');
  }

  getOne(id: number) {
    return this.http.get<RetrieveDTO>('/api/retrieves/' + id);
  }

  create(retrieve: RetrieveDTO) {
    return this.http.post<RetrieveDTO>('/api/retrieves', retrieve);
  }

  update(retrieve: RetrieveDTO) {
    return this.http.put<RetrieveDTO>('/api/retrieves', retrieve);
  }

  delete(id: number) {
    return this.http.delete('/api/retrieves/' + id);
  }
}