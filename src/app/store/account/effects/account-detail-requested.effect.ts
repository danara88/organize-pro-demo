import { AccountService } from '../../../services/account.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { accountDetailRequested, accountDetailSuccess } from '../account.actions';
import { catchError, exhaustMap, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountDetailRequestedEffect {
  public accountDetailRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(accountDetailRequested),
      exhaustMap(() => {
        return this.accountService.getAccount$().pipe(
          switchMap((user) => {
            return [accountDetailSuccess({ user })];
          }),
          catchError((errors) => {
            // Handle your app errors here ....
            console.log(errors);
            return of(null);
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) {}
}
