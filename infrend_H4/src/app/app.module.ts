import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <---- importáljuk a FormsModule-t

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <---- hozzáadjuk az FormsModule-t az imports tömbhöz
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
