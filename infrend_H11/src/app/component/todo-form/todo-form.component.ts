import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {
    title: '',
    description: '',
    deadline: '',
    status: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadDetails(id);
    }
  }

  loadDetails(id: string) {
    this.todoService.getOne(id).subscribe((todo) => {
      this.todo = { ...todo, deadline: this.formatDate(todo.deadline) };
    });
  }

  formatDate(date: string): string {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = ('0' + (formattedDate.getMonth() + 1)).slice(-2);
    const day = ('0' + formattedDate.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  submitForm() {
    if (this.todo.id) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    const formattedDeadline = this.formatDate(this.todo.deadline);

    this.todoService.create({
      ...this.todo,
      deadline: formattedDeadline,
    }).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }

  update() {
    const formattedDeadline = this.formatDate(this.todo.deadline);

    this.todoService.update({
      ...this.todo,
      deadline: formattedDeadline,
    }).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }

  cancel() {
    this.router.navigate(['/todos']);
  }
}