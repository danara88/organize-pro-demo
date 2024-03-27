import { Component } from '@angular/core';

@Component({
  selector: 'organizepro-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  /**
   * @memberof SearchComponent
   * @method searchTodo
   * @description Search todo's
   * @param searchText
   */
  public searchTodo(searchText: string): void {
    // Search todo logic here
    console.log({ searchText });
  }
}
