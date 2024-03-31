import { createAction, props } from '@ngrx/store';
import { User } from '../../models/account';

/**
 * @constant accountDetailRequested
 * @description Request account detail
 */
export const accountDetailRequested = createAction('[Account] Account detail requested');

/**
 * @constant accountDetailSuccess
 * @description Request account detail success
 */
export const accountDetailSuccess = createAction(
  '[Account] Account detail success',
  props<{
    user: User;
  }>()
);
