import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTodosCompleted, getTodosPending } from '../../../../store/todo/todos.selectors';

@Component({
  selector: 'organizepro-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  public getTodosCompleted$: Observable<number>;
  public getTodosPending$: Observable<number>;

  constructor(private store: Store) {
    this.getTodosCompleted$ = this.store.select(getTodosCompleted);
    this.getTodosPending$ = this.store.select(getTodosPending);
  }
}
