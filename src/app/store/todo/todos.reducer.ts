import { createReducer, on } from '@ngrx/store';
import { TodosAppState } from './models/todos.state';
import { INITIAL_TODOS_STATE } from './models/initial.todos.state';
import {
  createTodoAction,
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction,
} from './todos.actions';
import { Todo } from '../../models/todo';

/**
 * Todos reducer
 */
export const todosReducer = createReducer<TodosAppState>(
  INITIAL_TODOS_STATE,
  on(createTodoAction, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(editTodoAction, (state, { currentTodo, newTitle }) => {
    const newTodosArr: Todo[] = state.todos.map((todo) => {
      if (todo.id === currentTodo.id) {
        return {
          ...todo,
          title: newTitle,
        };
      }
      return todo;
    });

    return {
      ...state,
      todos: [...newTodosArr],
    };
  }),
  on(toggleTodoAction, (state, { todoToUpdate }) => {
    const newTodosArr: Todo[] = state.todos.map((todo) => {
      if (todo.id === todoToUpdate.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    return {
      ...state,
      todos: [...newTodosArr],
    };
  }),
  on(deleteTodoAction, (state, { id }) => {
    const newTodosArr: Todo[] = state.todos.filter((todo) => todo.id !== id);
    return {
      ...state,
      todos: [...newTodosArr],
    };
  })
);
