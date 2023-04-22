import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infrend_h7';

  username = '';
  user: any;
  userrepos!: any[];
  repos!: any[];

  constructor(private http: HttpClient) { }

  async searchUser() {
    this.http.get('https://api.github.com/users/' + this.username).subscribe((data) => {
      this.user = data;
    });

    this.http.get('https://api.github.com/users/'+ this.username +'/repos').subscribe((data: any) => {
        this.userrepos = data.items;
      });
  }

  async searchRepo() {
    this.http.get('https://api.github.com/search/repositories?q=' + this.repos).subscribe((data: any) => {
      this.repos = data.items;
    });
  }
}
