import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {
  repo = '';
  repos!: any[];

  constructor(private http: HttpClient) { }

  async searchRepos() {
    this.http.get('https://api.github.com/search/repositories?q=' + this.repo).subscribe((data: any) => {
      this.repos = data.items;
    });
  }
}
