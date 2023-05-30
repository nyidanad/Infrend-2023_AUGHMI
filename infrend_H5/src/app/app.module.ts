import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './component/joke-form/joke-form.component';
import { JokeStatsComponent } from './component/joke-stats/joke-stats.component';
import { JokeListComponent } from './component/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokeStatsComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }