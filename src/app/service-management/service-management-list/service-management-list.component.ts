import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-service-management-list',
  standalone: true,
  imports: [CommonModule, PaginatorModule, TableModule],
  templateUrl: './service-management-list.component.html',
  styleUrl: './service-management-list.component.scss'
})
export class ServiceManagementListComponent {
  first: number = 0;
  products: any[] = [
    { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 10 },
    { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 20 },
    { code: 'P003', name: 'Product 3', category: 'Category 3', quantity: 30 },
    { code: 'P004', name: 'Product 4', category: 'Category 4', quantity: 40 },
  ];

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
