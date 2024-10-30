import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManagementCrudComponent } from './service-management-crud.component';

describe('ServiceManagementCrudComponent', () => {
  let component: ServiceManagementCrudComponent;
  let fixture: ComponentFixture<ServiceManagementCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceManagementCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceManagementCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
