import { Injectable } from '@angular/core';
import { Record } from './record'; // importáljuk a Record interfészt

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  records: Record[] = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '+1 555-1234', address: '123 Main St, Anytown, USA' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '+1 555-5678', address: '456 Oak St, Anytown, USA' }
  ];

  getRecords(): Record[] {
    return this.records;
  }

  addRecord(record: Record): void {
    this.records.push(record);
  }

  deleteRecord(id: number): void {
    this.records = this.records.filter(record => record.id !== id);
  }
}
