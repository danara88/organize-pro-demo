import { Component } from '@angular/core';
import { TodoFacade } from '../../../../facades/todo.facade';

@Component({
  selector: 'organizepro-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private todoFacade: TodoFacade) {}

  /**
   * @memberof SearchComponent
   * @method searchTodo
   * @description Search todos
   * @param searchText
   */
  public searchTodo(searchText: string): void {
    if (!searchText) {
      return;
    }
    this.todoFacade.searchTodo(searchText);
  }
}
