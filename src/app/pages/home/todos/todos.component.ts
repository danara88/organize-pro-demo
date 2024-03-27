import { Component } from '@angular/core';
import { Todo } from '../../../models/todo';
import { MockTodos } from '../../../../assets/todos-mock';

@Component({
  selector: 'organizepro-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  public todos: Todo[] = MockTodos;
}
