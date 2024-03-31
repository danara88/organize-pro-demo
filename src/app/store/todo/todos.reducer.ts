import { createReducer, on } from '@ngrx/store';
import { TodosAppState } from './models/todos.state';
import { INITIAL_TODOS_STATE } from './models/initial.todos.state';
import {
  clearSearchTodo,
  createTodoAction,
  deleteTodoAction,
  editTodoAction,
  searchTodo,
  toggleTodoAction,
  updateTodoStatsAction,
} from './todos.actions';
import { Todo } from '../../models/todo';

/**
 * Todos reducer
 */
export const todosReducer = createReducer<TodosAppState>(
  INITIAL_TODOS_STATE,
  on(createTodoAction, (state, { todo }) => ({
    ...state,
    todoList: [...state.todoList, todo],
  })),
  on(editTodoAction, (state, { currentTodo, newTitle }) => {
    const newTodosArr: Todo[] = state.todoList.map((todo) => {
      if (todo.id === currentTodo.id) {
        return {
          ...todo,
          title: newTitle,
        };
      }
      return todo;
    });
    const pendingTodos: number = newTodosArr.filter((todo) => !todo.completed).length;
    return {
      ...state,
      pendingTodos,
      todoList: [...newTodosArr],
    };
  }),
  on(toggleTodoAction, (state, { todoToUpdate }) => {
    const newTodosArr: Todo[] = state.todoList.map((todo) => {
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
      todoList: [...newTodosArr],
    };
  }),
  on(deleteTodoAction, (state, { id }) => {
    const newTodosArr: Todo[] = state.todoList.filter((todo) => todo.id !== id);
    return {
      ...state,
      todoList: [...newTodosArr],
    };
  }),
  on(updateTodoStatsAction, (state, { totalCompleted, totalPending }) => ({
    ...state,
    completedTodos: totalCompleted,
    pendingTodos: totalPending,
  })),
  on(searchTodo, (state, { todoTitleToSearch }) => ({
    ...state,
    todoTitleToSearch,
  })),
  on(clearSearchTodo, (state) => ({
    ...state,
    todoTitleToSearch: null,
  }))
);
