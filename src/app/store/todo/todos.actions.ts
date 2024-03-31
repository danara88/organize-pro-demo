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
 * @constant deleteTodoAction
 * @description Deletes todo from the store
 */
export const deleteTodoAction = createAction('[TODO] Delete todo', props<{ id: number }>());

/**
 * @constant updateTodoStatsAction
 * @description Updates todo stats
 */
export const updateTodoStatsAction = createAction(
  '[TODO] Update todo stats',
  props<{ totalCompleted: number; totalPending: number }>()
);

/**
 * @constant searchTodo
 * @description Updates todo title search inside store
 */
export const searchTodo = createAction(
  '[TODO] Search todo',
  props<{ todoTitleToSearch: string }>()
);

/**
 * @constant clearSearchTodo
 * @description Clears todo search
 */
export const clearSearchTodo = createAction('[TODO] Clear search todo');
