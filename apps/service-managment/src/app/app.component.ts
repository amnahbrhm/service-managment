import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { BreadcrumbComponent } from './shared/layout/breadcrumb/breadcrumb.component';
import { UserProfileComponent } from './shared/layout/user-profile/user-profile.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    LayoutComponent,
    BreadcrumbComponent,
    MenuComponent,
    UserProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'service-managment';
}
