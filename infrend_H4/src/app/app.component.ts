import { Component, OnInit } from '@angular/core';
import { Record } from './record';
import { RecordService } from './record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  records: Record[] = [];
  newRecord: Record = { id: 0, name: '', email: '', phone: '', address: '' };

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords(): void {
    this.records = this.recordService.getRecords();
  }

  deleteRecord(id: number): void {
    this.recordService.deleteRecord(id);
    this.getRecords();
  }

  addRecord(): void {
    this.newRecord.id = this.generateId();
    this.recordService.addRecord(this.newRecord);
    this.newRecord = { id: 0, name: '', email: '', phone: '', address: '' };
    this.getRecords();
  }

  generateId(): number {
    return Math.max(...this.records.map(record => record.id)) + 1;
  }
}
