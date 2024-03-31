import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosAppState } from './models/todos.state';

/**
 * @constant getTodosState
 * @description Creates global selector for todos feature
 */
export const getTodosState = createFeatureSelector<TodosAppState>('todos');

/**
 * @constant getTodoList
 * @description Gets the todo list
 */
export const getTodoList = createSelector(getTodosState, (state) => state.todoList);

/**
 * @constant getTodosCompleted
 * @description Gets the total number of completed todos
 */
export const getTodosCompleted = createSelector(getTodosState, (state) => state.completedTodos);

/**
 * @constant getTodosPending
 * @description Gets the total number of pending todos
 */
export const getTodosPending = createSelector(getTodosState, (state) => state.pendingTodos);

/**
 * @constant getTodoTitleToSearch
 * @description Gets the todo title to search
 */
export const getTodoTitleToSearch = createSelector(
  getTodosState,
  (state) => state.todoTitleToSearch
);
