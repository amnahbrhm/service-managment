import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  // TODO get preActiveMenu from router
  preActiveMenu = 0;
  menu: IMenu[] = [
    {
      name: 'Service Management',
      icon: 'hand',
      path: '',
      active: true,
    },
    {
      name: 'Price Management',
      icon: 'box',
      path: '',
      active: false,
    },
    {
      name: 'Invoice Management',
      icon: 'file',
      path: '',
      active: false,
    },
    {
      name: 'User Management',
      icon: 'users',
      path: '',
      active: false,
    },
  ];

  menuChange(event: any, index: number) {
    this.menu[this.preActiveMenu].active = false;
    this.menu[index].active = true;
    this.preActiveMenu = index;
    (event.target as HTMLElement).blur(); // Remove focus from clicked item
  }
  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // prevents page from scrolling down on Space
      this.menuChange(event, index);
    }
  }
  handleSpanClick(event: MouseEvent, spanElement: any ) {
    // if(!spanElement) return
    const anchorElement = spanElement.closest('a'); // Find the closest <a> parent
    if (anchorElement) {
      anchorElement.blur(); // Blur the <a> element when the <span> is clicked
    }
  }
}

export interface IMenu {
  name: string;
  icon: string;
  path: string;
  active: boolean;
}
