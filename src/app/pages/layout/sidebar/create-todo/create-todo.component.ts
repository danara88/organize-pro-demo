import { Component } from '@angular/core';
import { Todo } from '../../../../models/todo';
import { TodoFacade } from '../../../../facades/todo.facade';

@Component({
  selector: 'organizepro-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  constructor(private todoFacade: TodoFacade) {}

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

    this.todoFacade.addTodo(todo);
  }
}
