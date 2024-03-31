import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { accountDetailRequested } from '../store/account/account.actions';
import { Observable } from 'rxjs';
import { getAccountDetail, getAccountProcessed } from '../store/account/account.selectors';
import { User } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountFacade {
  public accountProcessed$: Observable<boolean>;
  public accountDetail$: Observable<User>;

  constructor(private store: Store) {
    this.accountProcessed$ = this.store.select(getAccountProcessed);
    this.accountDetail$ = this.store.select(getAccountDetail);
  }

  public accountDetailRequested(): void {
    this.store.dispatch(accountDetailRequested());
  }
}
