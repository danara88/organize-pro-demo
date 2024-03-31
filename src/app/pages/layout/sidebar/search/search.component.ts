import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchTodo } from '../../../../store/todo/todos.actions';

@Component({
  selector: 'organizepro-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private store: Store) {}
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
    this.store.dispatch(searchTodo({ todoTitleToSearch: searchText }));
  }
}
