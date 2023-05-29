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
      this.todo = { ...todo };
    });
  }

  submitForm() {
    if (this.todo.id) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.todoService.create({
      ...this.todo,
    }).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }

  update() {
    this.todoService.update({
      ...this.todo,
    }).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }

  cancel() {
    this.router.navigate(['/todos']);
  }
}