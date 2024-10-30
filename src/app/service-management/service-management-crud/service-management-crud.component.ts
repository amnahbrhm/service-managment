import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-management-crud',
  standalone: true,
  imports: [],
  templateUrl: './service-management-crud.component.html',
  styleUrl: './service-management-crud.component.scss'
})
export class ServiceManagementCrudComponent implements OnInit {
  constructor() {
    console.log('ServiceManagementCrudComponent');
    
  }

  ngOnInit() {}

}
