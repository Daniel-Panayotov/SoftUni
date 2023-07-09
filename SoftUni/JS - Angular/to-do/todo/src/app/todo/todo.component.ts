import { Component, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo = { name: '', isComplete: true };

  constructor(private todoService: TodoService) {}

  complete(): void {
    this.todo = { name: this.todo.name, isComplete: true };
  }

  edit(): void {
    this.todoService.update(this.todo.name);
  }
}
