import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  errors: string[] = [];
  edit: boolean[] = [false];

  constructor() {}

  addNewTodo(todoInput: HTMLInputElement): void {
    this.errors.pop();
    if (todoInput.value != '') {
      const todo = {
        name: todoInput.value,
        isComplete: false,
      };

      this.todos.push(todo);
    } else {
      this.errors.push('error');
    }
    todoInput.value = '';
  }

  update(name: string) {}

  toggleEdit(): void {
    this.edit[0] = !this.edit[0];
  }
}
