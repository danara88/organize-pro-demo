import { createReducer } from '@ngrx/store';
import { TodosAppState } from './models/todos.state';
import { INITIAL_TODOS_STATE } from './models/initial.todos.state';

/**
 * Todos reducer
 */
export const todosReducer = createReducer<TodosAppState>(INITIAL_TODOS_STATE);
