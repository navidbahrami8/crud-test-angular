import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators , FormGroupDirective, NgForm, } from '@angular/forms';
import { ICustomerModel } from 'src/app/shared/models/customer.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import {ErrorStateMatcher} from '@angular/material/core';
import Customer from 'src/assets/data/customer.json';
import { BaseComponent } from 'src/app/shared/components/base.comonent';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent extends BaseComponent implements OnInit, AfterViewInit {
  customerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phoneNumber: new FormControl(''),
    bankAccountNumber: new FormControl(''),
  });

  constructor(
    private httpService: HttpClient,
    private customerService: CustomerService,
    private _ref: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {
  super()}

  ngAfterViewInit(): void {
    this._ref.detectChanges();
  }

  user: ICustomerModel = {
    id: 11,
    firstName: 'navid',
    lastName: 'bahrami',
    email: 'Rey.Padberg@karina.biz',
    dateOfBirth: '9/3/2022',
    phoneNumber: '09359361801',
    bankAccountNumber: '111111111',
  };

  ngOnInit(): void {
    this.createForm();
    this.getData();
    // setTimeout(() => {
    //   this.addCustomer(this.user);
    // }, 500);
  }

  createForm() {
    this.customerForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email]),
      dateOfBirth: new FormControl(''),
      phoneNumber: new FormControl(''),
      bankAccountNumber: new FormControl(''),
    });
  }

  getData() {
    this.httpService.get('assets/data/customer.json').subscribe((res) => {
      console.log('--- result :: ', res);
      this.customers = res;

      console.log(typeof this.customers);
    });
  }

  addCustomer(newPerson?: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'my-auth-token',
    //   }),
    // };

    // this.httpService
    //   .post('assets/data/customer.json', newPerson, httpOptions)
    //   .subscribe((res) => {
    //     console.log(res, ' res res ');
    //   });
    this.customers.push(this.user);
  }
}
