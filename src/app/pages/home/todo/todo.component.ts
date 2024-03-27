import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'organizepro-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() public todo: Todo = new Todo('');
  @ViewChild('todoTextEdit') public todoTextEditInput: ElementRef = new ElementRef(null);
  public isTodoChecked: boolean = false;
  public isEdit: boolean = false;

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
    // Edit todo here
    console.log('Edit todo: ', todoTextUpdated);
    this.todo.title = todoTextUpdated;
    this.isEdit = false;
  }

  /**
   * @memberof TodoComponent
   * @method handleTodoCheckbox
   * @description Method to handle the todo checkbox.
   * @param isChecked
   */
  public handleTodoCheckbox(isChecked: boolean): void {
    this.isTodoChecked = isChecked;
    console.log({ isTodoChecked: this.isTodoChecked });
  }

  /**
   * @memberof TodoComponent
   * @method deleteTodo
   * @description Method to delete todo.
   * @param id
   */
  public deleteTodo(id: number): void {
    // Delete todo here ...
    console.log('Delete todo:', { id });
  }
}
