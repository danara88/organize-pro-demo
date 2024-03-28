import { Component } from '@angular/core';
import { Todo } from '../../../../models/todo';
import { Store } from '@ngrx/store';
import { createTodoAction } from '../../../../store/todo/todos.actions';

@Component({
  selector: 'organizepro-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  constructor(private store: Store) {}
  /**
   * @memberof CreateTodoComponent
   * @method createTodo
   * @description Creates a new todo
   * @param todoName
   */
  public createTodo(todoName: string): void {
    if (!todoName) {
      return;
    }

    const todo: Todo = new Todo(todoName);

    this.store.dispatch(createTodoAction({ todo }));
  }
}
