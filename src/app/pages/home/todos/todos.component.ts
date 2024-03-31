import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../../../models/todo';
import { getTodoList, getTodoTitleToSearch } from '../../../store/todo/todos.selectors';
import { clearSearchTodo, updateTodoStatsAction } from '../../../store/todo/todos.actions';

@Component({
  selector: 'organizepro-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit, OnDestroy {
  // public todos: Todo[] = MockTodos;
  public todos: Todo[] = [];
  public getTodos$: Observable<Todo[]>;
  public getTodoTitleToSearch$: Observable<string>;
  public isSearch: boolean = false;
  private onDestroy$: Subject<void> = new Subject();

  constructor(private store: Store) {
    this.getTodos$ = this.store.select(getTodoList);
    this.getTodoTitleToSearch$ = this.store.select(getTodoTitleToSearch);
  }

  ngOnInit(): void {
    /**
     * Listen for todos state change and todoTitleToSearch state change
     */
    combineLatest([this.getTodos$, this.getTodoTitleToSearch$])
      .pipe(takeUntil(this.onDestroy$)) // Avoid memory leaks here
      .subscribe(([todos, todoTitleToSearch]) => {
        if (!todoTitleToSearch) {
          this.isSearch = false;
          this.todos = todos;
          const totalCompleted: number = this.todos.filter((todo) => todo.completed).length;
          const totalPending: number = this.todos.filter((todo) => !todo.completed).length;
          this.store.dispatch(updateTodoStatsAction({ totalCompleted, totalPending }));
        } else {
          this.todos = todos.filter((todo) => todo.title.includes(todoTitleToSearch));
          this.isSearch = true;
        }
      });
  }

  clearSearch(): void {
    this.store.dispatch(clearSearchTodo());
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
