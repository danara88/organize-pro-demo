import { Todo } from '../../../models/todo';

/**
 * Todos app state structure
 */
export interface TodosAppState {
  todos: Todo[];
  loading: boolean;
}
