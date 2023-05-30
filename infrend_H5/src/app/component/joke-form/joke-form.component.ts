import { Component, Output, EventEmitter } from '@angular/core';
import { Joke } from 'model/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {
  jokes: Joke[] = [];
  newJoke = {
    username: '',
    joke: '',
    likes: 0,
    dislikes: 0
  };

  @Output()
  jokeAdded = new EventEmitter<Joke>();

  add() {
    const joke = { ...this.newJoke };
    this.jokeAdded.emit(joke);
    this.newJoke.username = '';
    this.newJoke.joke = '';
  }
}
