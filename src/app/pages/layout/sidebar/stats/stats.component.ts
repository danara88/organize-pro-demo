import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoFacade } from '../../../../facades/todo.facade';

@Component({
  selector: 'organizepro-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  public getTodosCompleted$: Observable<number>;
  public getTodosPending$: Observable<number>;

  constructor(private todoFacade: TodoFacade) {
    this.getTodosCompleted$ = this.todoFacade.totalCompletedTodos$;
    this.getTodosPending$ = this.todoFacade.totalPendingTodos$;
  }
}
