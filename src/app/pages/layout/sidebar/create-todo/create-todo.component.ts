import { Component } from '@angular/core';
import { Todo } from '../../../../models/todo';

@Component({
  selector: 'organizepro-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
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
    console.log({ newTodo: todo });
  }
}
