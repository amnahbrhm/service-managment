import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'service-management',
        pathMatch: 'full',
    },
    {
        path: 'service-management',
        async loadComponent() {
            return import(
                './service-management/service-management-list/service-management-list.component'
            ).then((m) => m.ServiceManagementListComponent);
        },
        children: [
            {
                path: 'new',
                data: {
                    type: 'new',
                },
                async loadComponent() {
                    return import(
                        './service-management/service-management-crud/service-management-crud.component'
                    ).then((m) => m.ServiceManagementCrudComponent);
                },
            },
            {
                path: 'view/:id',
                data: {
                    type: 'view',
                },
                async loadComponent() {
                    return import(
                        './service-management/service-management-crud/service-management-crud.component'
                    ).then((m) => m.ServiceManagementCrudComponent);
                },
            },
            {
                path: 'edit/:id',
                data: {
                    type: 'edit',
                },
                async loadComponent() {
                    return import(
                        './service-management/service-management-crud/service-management-crud.component'
                    ).then((m) => m.ServiceManagementCrudComponent);
                }
            },
        ],
    },
];
