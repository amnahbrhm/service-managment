import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MockHttpService } from '../../shared/services/mock-http.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-service-management-crud',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    DividerModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    InputTextareaModule
  ],
  templateUrl: './service-management-crud.component.html',
  styleUrl: './service-management-crud.component.scss',
})
export class ServiceManagementCrudComponent implements OnInit {
  service: any;
  id: string | null = null;
  operationType: any;
  constructor(
    private route: ActivatedRoute,
    private httpService: MockHttpService
  ) {}
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      serviceName: new FormControl(''),
      serviceNameAr: new FormControl(''),
      type: new FormControl(''),
      code: new FormControl(''),
      price: new FormControl(''),
      descriptionAr: new FormControl(''),
      descriptionEn: new FormControl(''),
      vattable: new FormControl(''),
      vatValue: new FormControl(''),
    });

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.operationType = this.route.snapshot.data['type'];
    });
    if (this.operationType === 'view') {
      this.form.disable();
    }
    if (this.id) {
      this.getServiceById(this.id);
    }
  }

  getServiceById(id: string) {
    this.httpService
      .getById('assets/dummy-data/services.json', this.id!)
      .subscribe({
        next: (obj) => {
          this.service = obj;
          this.form.patchValue({
            serviceName: this.service.serviceName,
            serviceNameAr: this.service.serviceNameAr,
            type: this.service.type,
            code: this.service.code,
            price: this.service.price + ' SR',
            descriptionAr: this.service.descriptionAr,
            descriptionEn: this.service.descriptionEn,
            vattable: this.service.vattable,
            vatValue: this.service.vatValue + ' %',
          });
          console.log('service', this.service);
        },
        error: (error) => {
          console.error('error', error);
        },
      });
    console.log('Getting service by ID:', id);
  }
}
