import { Component, Input } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo | undefined = undefined;

  constructor() {
    console.log(this.todo);
  }
}
