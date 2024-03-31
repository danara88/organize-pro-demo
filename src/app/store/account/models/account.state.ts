import { User } from '../../../models/account';

/**
 * Account app state structure
 */
export interface AccountAppState {
  user: User;
  loading: boolean;
}
