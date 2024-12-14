import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ApisService } from '../sm.service';
import { HttpEventType } from '@angular/common/http';
import { HTTP_SERVICE } from '../../shared/services/service';
@Component({
  selector: 'app-service-management-list',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorModule,
    TableModule,
    RouterModule,
    ButtonModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
  templateUrl: './service-management-list.component.html',
  styleUrl: './service-management-list.component.scss',
})
export class ServiceManagementListComponent {
  first: number = 0;
  services: any[] = [];
  page: number = 1;
  pageSize: number = 7;
  filterApplied = false;
  filterObject: IFilter = {
    name: undefined,
    status: undefined,
    type: undefined,
  };
  StatusOptions = ['active', 'inactive'];
  types = [
    'Real Estate',
    'Transportation',
    'Business',
    'Finance',
    'Insurance',
    'Construction',
    'Environmental',
    'Services',
    'Technology',
  ];
  totalRecords: number = 0;
  constructor(@Inject(HTTP_SERVICE) private service: any) {
    this.loadData();
  }
  //   constructor(private httpService: MockHttpService) {


  // loadData(fromFilter = false) {
  //   let filterObject = this.filterApplied ? this.filterObject : {};
  //   this.page = fromFilter ? 1 : this.page;
  //   this.pageSize = fromFilter ? 10 : this.pageSize;
  //   console.log('page', this.page, this.pageSize, filterObject);
  //   this.service
  //     .getServicesCancellation({
  //       page: this.page,
  //       pagination: this.pageSize,
  //       ...filterObject,
  //     })
  //     .subscribe({
  //       next: (obj) => {
  //         if (obj.type === HttpEventType.Response) {
  //           this.services = obj.body?.Services || [];
  //           this.totalRecords = obj.body?.rowsCount || 0;
  //           console.log('services', this.services);
            
  //         }
  //       },
  //       error: (error) => {
  //         console.error('error', error);
  //       },
  //     });
  // }
  loadData(fromFilter = false) {
    let filterObject = this.filterApplied ? this.filterObject : {};
    this.page = fromFilter ? 1 : this.page;
    this.pageSize = fromFilter ? 10 : this.pageSize;
    console.log('page', this.page, this.pageSize, filterObject);
    this.service
      .get('assets/dummy-data/services.json', {
        page: this.page,
        pageSize: this.pageSize,
        ...filterObject,
      })
      .subscribe({
        next: (obj: any) => {
          this.services = obj.data;
          this.totalRecords = obj.totalRecords;
        },
        error: (error: any) => {
          console.error('error', error);
        },
      });
  }
  onPageChange(event: PageEvent) {
    console.log('event', event.first);

    this.page = event.page ? event.page + 1 : 1;
    this.loadData();
    // this.first = event.first ?? 0;
    // this.rows = event.rows ?? 10;
  }
  applyFilter() {
    if (
      this.filterObject.name == undefined &&
      this.filterObject.status == undefined &&
      this.filterObject.type == undefined
    )
      return;
    this.filterApplied = true;
    this.loadData(true);
  }
  clearFilter() {
    this.filterApplied = false;
    this.filterObject = {
      name: undefined,
      status: undefined,
      type: undefined,
    };
    this.loadData(true);
  }
}

interface PageEvent {
  first?: number | undefined;
  rows?: number | undefined;
  page?: number | undefined;
  pageCount?: number | undefined;
}

interface IFilter {
  name: string | undefined;
  status: 'active' | 'inactive' | undefined;
  type: string | undefined;
}
