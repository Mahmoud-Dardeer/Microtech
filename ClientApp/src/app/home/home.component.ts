import { Component } from '@angular/core';
import { AccountService } from "../services/account.service";
import { IAccountModel } from "../models/account-model";
import { IAccountDetailsModel } from "../models/account-details-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(
    private accountService: AccountService
  ) { }

  accounts: IAccountModel[]=[];
  accountDetails: IAccountDetailsModel[]=[];
  displayedColumns: string[] = ['topLevelAccount', 'totalBalance'];

  ngOnInit() {
    this.accountService.getAllTotalBalances<IAccountModel[]>().subscribe(response => {
      console.log('accounts : ', response);
      if (response.length > 0) {
        this.accounts = response;
      }
    });
  }

  onDetails(accNumber : string) {
    this.accountService.getAccountDetails<IAccountDetailsModel[]>(accNumber).subscribe(response => {
      if (response.length > 0 ) {
        this.accountDetails = [];
        this.accountDetails = response;
      }
    });
  }
}
