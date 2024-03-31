import { Component, OnInit } from '@angular/core';
import { AccountFacade } from '../../../facades/account.facade';
import { Observable, combineLatest, filter, tap } from 'rxjs';
import { User } from '../../../models/account';

@Component({
  selector: 'organizepro-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public accountProcessed$: Observable<boolean>;
  public user: User = null;

  constructor(private accountFacade: AccountFacade) {
    this.accountProcessed$ = this.accountFacade.accountProcessed$;
  }

  ngOnInit(): void {
    combineLatest([this.accountProcessed$, this.accountFacade.accountDetail$])
      .pipe(
        filter(([processed, _]) => processed), // Ensure that the user info is loaded
        tap(([_, user]) => {
          // Here you can implement your logic using user info
          this.user = user;
        })
      )
      .subscribe();
  }
}
