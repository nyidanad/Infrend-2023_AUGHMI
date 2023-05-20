import { Component } from '@angular/core';

interface Joke {
  username: string;
  joke: string;
  likes: number;
  dislikes: number;
}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent {
  jokes: Joke[] = [];
  newJoke = {
    username: '',
    joke: '',
    likes: 0,
    dislikes: 0
  };

  addJoke() {
    this.jokes.push({ ...this.newJoke });
    this.newJoke.username = '';
    this.newJoke.joke = '';
  }

  totalVotes(): number {
    return this.jokes.reduce((total, joke) => total + joke.likes + joke.dislikes, 0);
  }

  get totalLikes(): number {
    return this.jokes.reduce((total, joke) => total + joke.likes, 0);
  }

  get totalDislikes(): number {
    return this.jokes.reduce((total, joke) => total + joke.dislikes, 0);
  }

  like(joke: Joke) {
    joke.likes++;
  }

  dislike(joke: Joke) {
    joke.dislikes++;
  }
}
