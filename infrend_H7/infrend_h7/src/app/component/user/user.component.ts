import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  username = '';
  user: any;
  userrepos!: any[];

  constructor(private http: HttpClient) { }

  async searchUser() {
    this.http.get('https://api.github.com/users/' + this.username).subscribe((data) => {
      this.user = data;
    });

    this.http.get('https://api.github.com/users/' + this.username +'/repos').subscribe((data: any) => {
        this.userrepos = data;
      });
  }
}
