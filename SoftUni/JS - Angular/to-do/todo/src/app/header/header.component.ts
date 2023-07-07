import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [TodoService],
})
export class HeaderComponent {
  constructor(private todoService: TodoService) {}

  addTodoHandler(todoInput: HTMLInputElement): void {
    this.todoService.addNewTodo(todoInput);
  }
}
