import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccountResponse, User } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private urlBase: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  /**
   * @memberof AccountService
   * @method getAccount
   * @description Gets the account detail from the server.
   * @returns {Observable<Account>}
   */
  public getAccount$(): Observable<User> {
    return this.http.get<AccountResponse>(`${this.urlBase}/2?delay=4`).pipe(
      map((accountResponse) => ({
        id: accountResponse.data.id,
        name: accountResponse.data.first_name,
        surname: accountResponse.data.last_name,
        email: accountResponse.data.email,
      }))
    );
  }
}
