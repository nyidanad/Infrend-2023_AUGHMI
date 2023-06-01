import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RetrieveDTO } from 'model';
import { RetrieveService } from 'src/app/service/retrieve.service';

@Component({
  selector: 'app-retrieve-list',
  templateUrl: './retrieve-list.component.html',
  styleUrls: ['./retrieve-list.component.css']
})
export class RetrieveListComponent {

  retrieves!: RetrieveDTO[];

  constructor (
    private router: Router,
    private retrieveService: RetrieveService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.retrieveService.getAll().subscribe({
      next: (retrieves) => {
        this.retrieves = retrieves;
        console.log(retrieves);
      },
      error: (err) => console.error(err)
    });
  }

  create() {
    this.router.navigate(['/retrieve-form']);
  }

  edit(retrieve: RetrieveDTO) {
    this.router.navigate([ '/retrieve-form', retrieve.id ]);
  }

  delete(retrieve: RetrieveDTO) {
    this.retrieveService.delete(retrieve.id).subscribe({
      next: () => {
        const index = this.retrieves.indexOf(retrieve);
        if (index > -1) {
          this.retrieves.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a törléskor.', 'Hiba');
      }
    });
  }
}
