import { AccountAppState } from './account.state';

/**
 * Initial app account state
 */
export const INITIAL_ACCOUNT_STATE: AccountAppState = {
  user: null, // Set  "strictNullChecks": false to allow null
  loading: false,
};
