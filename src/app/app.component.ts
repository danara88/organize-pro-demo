import { Component, OnInit } from '@angular/core';
import { AccountFacade } from './facades/account.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private accountFacade: AccountFacade) {}

  ngOnInit(): void {
    // Request account detail
    this.accountFacade.accountDetailRequested();
  }
}
