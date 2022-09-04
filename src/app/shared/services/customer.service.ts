import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpService: HttpClient) {}

  getData(customer: any) {
    this.httpService.get('assets/data/customer.json')
  }
}
