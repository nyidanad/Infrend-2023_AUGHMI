import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'models/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  showExpiredTodos: boolean = false;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.loadTodoList();
  }

  loadTodoList() {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos;
    });
  }

  loadExpiredList() {
    if (this.showExpiredTodos) {
      this.loadTodoList();
    } else {
      this.todoService.getExpired().subscribe((expiredTodos) => {
        this.todos = expiredTodos;
      });
    }
    this.showExpiredTodos = !this.showExpiredTodos;
  }

  edit(todo: Todo) {
    this.router.navigate(['/todos', todo.id, 'edit']);
  }

  delete(todo: Todo) {
    if (todo.id) {
      this.todoService.delete(todo.id.toString()).subscribe(() => {

        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
    }
  }
  
  create() {
    this.router.navigate(['/todos/new']);
  }

  cancel() {
    this.router.navigate(['/todos']);
  }
}