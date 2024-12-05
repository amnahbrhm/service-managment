import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { filter } from 'rxjs';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  breadcrumbItems: MenuItem[] | undefined;

  home: MenuItem | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    const serviceId = this.route.snapshot.paramMap.get('id'); // Retrieve the 'id' parameter
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateBreadcrumbs();
    });

    this.home = { label: 'Service Management', routerLink: '/service-management' };
  }

  updateBreadcrumbs(): void {
    const url = this.router.url;
    this.breadcrumbItems = [{ label: 'Service List', routerLink: 'service-management' }];

    if (url.includes('service-management/view')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.breadcrumbItems.push({
        label: 'Service Detail',
        routerLink: id ? `service-management/view/${id}` : 'service-management/view/:id',
      });
    } else if (url.includes('service-management/edit')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.breadcrumbItems.push(
        { label: 'Service Edit', routerLink: id ? `service-management/edit/${id}` : 'service-management/edit/:id' }
      );
    } else if (url.includes('service-management/new')) {
      this.breadcrumbItems.push({ label: 'Service Create', routerLink: 'service-management/new' });
    }
  }
}
