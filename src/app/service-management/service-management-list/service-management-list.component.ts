import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MockHttpService } from '../../shared/services/mock-http.service';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
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
  constructor(private httpService: MockHttpService) {
    this.loadData();
  }

  loadData(fromFilter = false) {
    let filterObject = this.filterApplied ? this.filterObject : {};
    this.page = fromFilter ? 1 : this.page;
    this.pageSize = fromFilter ? 10 : this.pageSize;
    console.log('page', this.page, this.pageSize, filterObject);
    this.httpService
      .get('assets/dummy-data/services.json', {
        page: this.page,
        pageSize: this.pageSize,
        ...filterObject,
      })
      .subscribe({
        next: (obj) => {
          this.services = obj.data;
          this.totalRecords = obj.totalRecords;
        },
        error: (error) => {
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
