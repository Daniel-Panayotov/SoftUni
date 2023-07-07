import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [TodoService],
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
  }

  ngOnInit(): void {}
}
