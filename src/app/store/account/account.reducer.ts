import { createReducer } from '@ngrx/store';
import { INITIAL_ACCOUNT_STATE } from './models/initial.account.state';

/**
 * Account reducer
 */
export const accountReducer = createReducer(INITIAL_ACCOUNT_STATE);
