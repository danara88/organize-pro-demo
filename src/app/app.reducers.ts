import { ActionReducerMap } from '@ngrx/store';
import { TodosAppState } from './store/todo/models/todos.state';
import { todosReducer } from './store/todo/todos.reducer';
import { AccountAppState } from './store/account/models/account.state';
import { accountReducer } from './store/account/account.reducer';

export interface AppState {
  todos: TodosAppState;
  account: AccountAppState;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  account: accountReducer,
};
