import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  observeTodos = new Observable((observer) => {});
  todosSubject = new Subject();

  constructor() {
    this.todos = [];
  }

  addNewTodo(todoInput: HTMLInputElement): void {
    if (todoInput.value != '') {
      const todo = {
        name: todoInput.value,
        isComplete: false,
      };

      this.todos.push(todo);
    }
    todoInput.value = '';
  }
}
