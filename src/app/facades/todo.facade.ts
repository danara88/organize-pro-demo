import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import {
  clearSearchTodo,
  createTodoAction,
  deleteTodoAction,
  editTodoAction,
  searchTodo,
  toggleTodoAction,
  updateTodoStatsAction,
} from '../store/todo/todos.actions';
import {
  getTodoList,
  getTodoTitleToSearch,
  getTodosCompleted,
  getTodosPending,
} from '../store/todo/todos.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  public todos$: Observable<Todo[]>;
  public totalCompletedTodos$: Observable<number>;
  public totalPendingTodos$: Observable<number>;
  public todoTitleToSearch$: Observable<string>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(getTodoList);
    this.totalCompletedTodos$ = this.store.select(getTodosCompleted);
    this.totalPendingTodos$ = this.store.select(getTodosPending);
    this.todoTitleToSearch$ = this.store.select(getTodoTitleToSearch);
  }

  public addTodo(todo: Todo): void {
    this.store.dispatch(createTodoAction({ todo }));
  }

  public editTodo(currentTodo: Todo, newTitle: string): void {
    this.store.dispatch(editTodoAction({ currentTodo, newTitle }));
  }

  public updatetTodoStats(totalCompleted: number, totalPending: number): void {
    this.store.dispatch(updateTodoStatsAction({ totalCompleted, totalPending }));
  }

  public toggleTodo(todoToUpdate: Todo): void {
    this.store.dispatch(toggleTodoAction({ todoToUpdate }));
  }

  public deleteTodo(id: number): void {
    this.store.dispatch(deleteTodoAction({ id }));
  }

  public searchTodo(todoTitleToSearch: string): void {
    this.store.dispatch(searchTodo({ todoTitleToSearch }));
  }

  public clearSearch(): void {
    this.store.dispatch(clearSearchTodo());
  }
}
