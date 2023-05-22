import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  username = '';
  reponame = '';
  repo: any;

  constructor(private http: HttpClient) { }

  async searchRepo() {
    this.http.get('https://api.github.com/repos/'+this.username+'/'+this.reponame).subscribe((data) => {
      this.repo = data;
    });
  }
}
