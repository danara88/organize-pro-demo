import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { Todo } from '../../../models/todo';
import { TodoFacade } from '../../../facades/todo.facade';

@Component({
  selector: 'organizepro-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit, OnDestroy {
  // public todos: Todo[] = MockTodos;
  public todos: Todo[] = [];
  public isSearch: boolean = false;
  private onDestroy$: Subject<void> = new Subject();

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {
    /**
     * Listen for todos state change and todoTitleToSearch state change
     */
    combineLatest([this.todoFacade.todos$, this.todoFacade.todoTitleToSearch$])
      .pipe(takeUntil(this.onDestroy$)) // Avoid memory leaks here
      .subscribe(([todos, todoTitleToSearch]) => {
        if (!todoTitleToSearch) {
          this.isSearch = false;
          this.todos = todos;
          const totalCompleted: number = this.todos.filter((todo) => todo.completed).length;
          const totalPending: number = this.todos.filter((todo) => !todo.completed).length;
          this.todoFacade.updatetTodoStats(totalCompleted, totalPending);
        } else {
          this.todos = todos.filter((todo) => todo.title.includes(todoTitleToSearch));
          this.isSearch = true;
        }
      });
  }

  /**
   * @memberof TodosComponent
   * @method clearSearch
   * @description Clear todo search feature
   */
  public clearSearch(): void {
    this.todoFacade.clearSearch();
  }

  ngOnDestroy(): void {
    /**
     * Be sure to complete and cancel
     * all your observbles.
     * Avoid memory leaks.
     */
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
