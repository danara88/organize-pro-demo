import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosAppState } from './models/todos.state';

export const getTodosState = createFeatureSelector<TodosAppState>('todos');

export const getTodos = createSelector(getTodosState, (state) => state.todos);
