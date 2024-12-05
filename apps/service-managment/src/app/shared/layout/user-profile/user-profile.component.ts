import { Component, ViewEncapsulation } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UserProfileComponent {

  menu = [
    {
      path: 'profile',
      label: 'Profile',
    }
  ]

}
