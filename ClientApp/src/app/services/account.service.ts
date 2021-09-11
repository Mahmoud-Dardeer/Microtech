import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAllTotalBalances<T>() {
    return this.http.get<T>('https://localhost:44369/api/accounts/get-total-balances' );
  }

  getAccountDetails<T>( accNumber : string) {
    return this.http.get<T>('https://localhost:44369/api/accounts/get-account-details/' + accNumber);
  }
}
