import { Todo } from '../../../models/todo';

/**
 * Todos app state structure
 */
export interface TodosAppState {
  todoList: Todo[];
  pendingTodos: number;
  completedTodos: number;
  todoTitleToSearch: string;
  loading: boolean;
}
