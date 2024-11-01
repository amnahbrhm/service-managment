import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Service List',
        url: 'service-management',
        items: [
          {
            label: 'Service Detail',
            url: 'view/:id',
          },
          {
            label: 'Service Edit',
            url: 'edit/:id',
          },
          {
            label: 'Service Create',
            url: 'new',
          },
        ],
      },
    ];

    this.home = { label: 'Service Management', routerLink: '/' };
  }
}
