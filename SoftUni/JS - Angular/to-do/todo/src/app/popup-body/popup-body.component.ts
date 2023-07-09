import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-popup-body',
  templateUrl: './popup-body.component.html',
  styleUrls: ['./popup-body.component.css'],
})
export class PopupBodyComponent {
  constructor(private todoService: TodoService) {}

  cancel(): void {
    this.todoService.toggleEdit();
  }
}
