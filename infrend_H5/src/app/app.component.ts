import { Component } from '@angular/core';
import { Joke } from 'model/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infrend_h5';

  jokes: Joke[] = [];

  addJoke(joke: Joke) {
    this.jokes.push(joke);
  }
}
