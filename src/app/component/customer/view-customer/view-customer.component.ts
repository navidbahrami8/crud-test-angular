import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.comonent';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  isDeleted: boolean = false;
  constructor(
    private httpService: HttpClient,
    private _ref: ChangeDetectorRef
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this._ref.detectChanges();
  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpService.get('assets/data/customer.json').subscribe((res) => {
      console.log('--- result :: ', res);
      this.dataSource = res;
    });
  }

  addData() {
    const randomElementIndex = Math.floor(
      Math.random() * this.dataSource.length
    );
  }

  editData(index: any) {}

  deleteData(index: any) {
    console.log(index, 'i');
    this.isDeleted = true;
    delete this.dataSource[index];
    this.customers = this.dataSource;
    this.ngAfterViewInit();
  }
}
