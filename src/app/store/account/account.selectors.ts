import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountAppState } from './models/account.state';

/**
 * @constant getAccountState
 * @description Creates global selector for account feature
 */
export const getAccountState = createFeatureSelector<AccountAppState>('account');

/**
 * @constant getAccountLoading
 * @description Gets the loader state for account feature
 */
export const getAccountLoading = createSelector(getAccountState, (state) => state.loading);

/**
 * @constant getAccountProcessed
 * @description Checks if the account feature is loaded
 */
export const getAccountProcessed = createSelector(getAccountLoading, (loading) => !loading);

/**
 * @constant getAccountDetail
 * @description Gets the account detail
 */
export const getAccountDetail = createSelector(getAccountState, (state) => state?.user);
