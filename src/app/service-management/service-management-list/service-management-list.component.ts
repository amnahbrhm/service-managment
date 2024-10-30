import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MockHttpService } from '../../shared/services/mock-http.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-management-list',
  standalone: true,
  imports: [CommonModule, PaginatorModule, TableModule, RouterModule],
  templateUrl: './service-management-list.component.html',
  styleUrl: './service-management-list.component.scss',
})
export class ServiceManagementListComponent {
  first: number = 0;
  services: any[] = [];
  page: number = 1;
  pageSize: number = 10;
  constructor(private httpService: MockHttpService) {
    this.loadData();
  }

  loadData() {
    this.httpService
      .get('assets/dummy-data/services.json', {
        page: this.page,
        pageSize: this.pageSize,
      })
      .subscribe({
        next: (data) => {
          console.log('data', data);
          
          this.services = data;
        },
        error: (error) => {
          console.error('error', error);
        }
      });
  }

  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }
}

interface PageEvent {
  first?: number | undefined;
  rows?: number | undefined;
  page?: number | undefined;
  pageCount?: number | undefined;
}
