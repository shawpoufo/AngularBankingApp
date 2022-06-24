import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { catchError, Observable, throwError } from 'rxjs';
import { BankAccount } from '../model/account.model';
import {Customer} from "../model/customer.model";
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {
  customerId! : string ;
  customer! : Customer;
  bankAccounts! : Array<BankAccount>;

  constructor(private route : ActivatedRoute, private router :Router , private accountService : AccountsService) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.accountService.getList(this.route.snapshot.params['id']).subscribe(data =>{
      this.bankAccounts = data
    });
    console.log(this.bankAccounts)
  }

}