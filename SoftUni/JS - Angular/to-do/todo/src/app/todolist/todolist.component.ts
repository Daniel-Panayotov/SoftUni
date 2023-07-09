import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  todos: Todo[] = [];
  errors: string[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
    this.errors = this.todoService.errors;
  }
}
