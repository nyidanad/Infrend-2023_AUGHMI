import { Component, Input } from '@angular/core';
import { Joke } from 'model/joke';

@Component({
  selector: 'app-joke-stats',
  templateUrl: './joke-stats.component.html',
  styleUrls: ['./joke-stats.component.css']
})
export class JokeStatsComponent {
  @Input()
  jokes: Joke[] = [];

  totalVotes(): number {
    return this.jokes.reduce((total, joke) => total + joke.likes + joke.dislikes, 0);
  }

  get totalLikes(): number {
    return this.jokes.reduce((total, joke) => total + joke.likes, 0);
  }

  get totalDislikes(): number {
    return this.jokes.reduce((total, joke) => total + joke.dislikes, 0);
  }
}
