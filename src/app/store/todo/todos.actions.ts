import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo';

/**
 * @constant createTodoAction
 * @description Stores a new todo
 */
export const createTodoAction = createAction('[TODO] Create todo', props<{ todo: Todo }>());

/**
 * @constant editTodoAction
 * @description Edits todo in the store
 */
export const editTodoAction = createAction(
  '[TODO] Edit todo',
  props<{ currentTodo: Todo; newTitle: string }>()
);

/**
 * @constant toggleTodoAction
 * @description Toggle todo in the store
 */
export const toggleTodoAction = createAction('[TODO] Toggle todo', props<{ todoToUpdate: Todo }>());

/**
 * @constant deleteTodo
 * @description Deletes todo from the store
 */
export const deleteTodoAction = createAction('[TODO] Delete todo', props<{ id: number }>());
