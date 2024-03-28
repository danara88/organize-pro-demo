import { Component, Input } from '@angular/core';
import { Todo } from '../../../models/todo';
import { Store } from '@ngrx/store';
import {
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction,
} from '../../../store/todo/todos.actions';

@Component({
  selector: 'organizepro-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() public todo: Todo = new Todo('');
  public isEdit: boolean = false;

  constructor(private store: Store) {}

  /**
   * @memberof TodoComponent
   * @method editTodo
   * @description Method to edit todo.
   * @param todo
   */
  public editTodo(todoTextUpdated: string): void {
    if (!todoTextUpdated) {
      return;
    }
    this.isEdit = false;
    this.store.dispatch(editTodoAction({ currentTodo: this.todo, newTitle: todoTextUpdated }));
  }

  /**
   * @memberof TodoComponent
   * @method handleTodoCheckbox
   * @description Method to handle the todo checkbox.
   */
  public handleTodoCheckbox(): void {
    this.store.dispatch(toggleTodoAction({ todoToUpdate: this.todo }));
  }

  /**
   * @memberof TodoComponent
   * @method deleteTodo
   * @description Method to delete todo.
   * @param id
   */
  public deleteTodo(id: number): void {
    this.store.dispatch(deleteTodoAction({ id }));
  }
}
