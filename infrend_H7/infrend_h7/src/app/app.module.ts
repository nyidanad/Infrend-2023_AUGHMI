import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './component/user/user.component';
import { RepoComponent } from './component/repo/repo.component';
import { UsersComponent } from './component/users/users.component';
import { ReposComponent } from './component/repos/repos.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'users', component: UsersComponent },
  { path: 'repos', component: ReposComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    UsersComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
