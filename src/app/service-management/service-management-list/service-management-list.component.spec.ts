import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManagementListComponent } from './service-management-list.component';

describe('ServiceManagementListComponent', () => {
  let component: ServiceManagementListComponent;
  let fixture: ComponentFixture<ServiceManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceManagementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
