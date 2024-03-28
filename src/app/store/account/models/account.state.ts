import { User } from '../../../models/user';

/**
 * Account app state structure
 */
export interface AccountAppState {
  user: User;
  loading: boolean;
}
