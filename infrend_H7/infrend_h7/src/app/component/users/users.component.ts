import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user = '';
  users: any[] = [];

  constructor(private http: HttpClient) { }

  async searchUsers() {
    this.http.get('https://api.github.com/search/users?q=' + this.user).subscribe((data: any) => {
      this.users = data.items;
    });
  }
}
