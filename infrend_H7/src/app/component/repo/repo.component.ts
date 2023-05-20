import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  repo = '';
  repos!: any[];

  constructor(private http: HttpClient) { }

  async searchRepo() {
    this.http.get('https://api.github.com/search/repositories?q=' + this.repo).subscribe((data: any) => {
      this.repos = data.items;
    });
  }
}
