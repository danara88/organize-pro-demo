import { TodosAppState } from './todos.state';

/**
 * Initial app todos state
 */
export const INITIAL_TODOS_STATE: TodosAppState = {
  todoList: [],
  pendingTodos: 0,
  completedTodos: 0,
  todoTitleToSearch: null,
  loading: false,
};
