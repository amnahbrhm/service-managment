import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MenuComponent } from '../menu/menu.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  // @ContentChild('breadcrmp') breadcrumb!: BreadcrumbComponent;
  // @ContentChild('menu') menu!: MenuComponent;
  // @ContentChild('menu') userProfile!: UserProfileComponent;
  
  // // breadcrumb = ''
  // ngAfterContentInit() {
  //   if (this.breadcrumb) {
  //     console.log('Breadcrumb component found');
  //   }
  //   if (this.menu) {
  //     console.log('Menu component found');
  //   }
  // }
}