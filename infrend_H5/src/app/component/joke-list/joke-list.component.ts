import { Component, Input } from '@angular/core';
import { Joke } from 'model/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
  @Input()
  jokes: Joke[] = [];

  like(joke: Joke) {
    joke.likes++;
  }

  dislike(joke: Joke) {
    joke.dislikes++;
  }
}
