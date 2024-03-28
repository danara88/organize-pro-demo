import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../../../models/todo';
import { getTodos } from '../../../store/todo/todos.selectors';

@Component({
  selector: 'organizepro-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit, OnDestroy {
  // public todos: Todo[] = MockTodos;
  public todos: Todo[] = [];
  public getTodos$: Observable<Todo[]>;
  private onDestroy$: Subject<void> = new Subject();

  constructor(private store: Store) {
    this.getTodos$ = this.store.select(getTodos);
  }

  ngOnInit(): void {
    this.getTodos$.pipe(takeUntil(this.onDestroy$)).subscribe((todos) => {
      this.todos = todos;
    });
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
