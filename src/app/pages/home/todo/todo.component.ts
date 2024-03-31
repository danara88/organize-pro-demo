import { Component, Input } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodoFacade } from '../../../facades/todo.facade';

@Component({
  selector: 'organizepro-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() public todo: Todo = new Todo('');
  public isEdit: boolean = false;

  constructor(private todoFacade: TodoFacade) {}

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
    this.todoFacade.editTodo(this.todo, todoTextUpdated);
  }

  /**
   * @memberof TodoComponent
   * @method handleTodoCheckbox
   * @description Method to handle the todo checkbox.
   */
  public handleTodoCheckbox(): void {
    this.todoFacade.toggleTodo(this.todo);
  }

  /**
   * @memberof TodoComponent
   * @method deleteTodo
   * @description Method to delete todo.
   * @param id
   */
  public deleteTodo(id: number): void {
    this.todoFacade.deleteTodo(id);
  }
}
