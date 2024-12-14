import {
  AfterContentInit,
  Component,
  ContentChild,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MenuComponent } from '../menu/menu.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @ViewChild('microHeader', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
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
  ngOnInit() {
    this.loadRemote();
  }
  async loadRemote(): Promise<void> {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component',
      });

      const component = module.AppComponent;

      // Dynamically create the component in the ViewContainerRef
      const componentRef = this.viewContainer.createComponent<any>(component);

      // Optional: Pass any inputs to the remote component if needed
      // (componentRef.instance as any).someInput = 'Hello from Host!';
      (componentRef.instance as any).title = 'Welcome to the Micro Header!';
      (componentRef.instance as any).description = 'This is dynamically loaded from a remote module.';

    } catch (error) {
      console.error('Error loading remote module:', error);
    }
  }
}
