import { createReducer, on } from '@ngrx/store';
import { INITIAL_ACCOUNT_STATE } from './models/initial.account.state';
import { accountDetailRequested, accountDetailSuccess } from './account.actions';

/**
 * Account reducer
 */
export const accountReducer = createReducer(
  INITIAL_ACCOUNT_STATE,
  on(accountDetailRequested, (state) => ({
    ...state,
    loading: true,
  })),
  on(accountDetailSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  }))
);
