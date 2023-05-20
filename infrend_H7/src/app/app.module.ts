import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './component/user/user.component';
import { RepoComponent } from './component/repo/repo.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'repo', component: RepoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent
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
