import { Component, HostListener } from '@angular/core';

// Interfaces to define the structure of menu items and sub-menu items
interface SubMenuItem {
  label: string;
  routerLink: string;
}

interface MenuItem {
  label: string;
  submenuItems?: SubMenuItem[];
  routerLink?: string;
  showDropdown?: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Array to hold the menu items with their respective properties
  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: '/' },
    {
      label: 'Product',
      submenuItems: [
        { label: 'Cricket', routerLink: 'profile' },
        { label: 'Football', routerLink: 'profile' },
        { label: 'Hockey', routerLink: 'profile' },
      ],
      routerLink: '/',
    },
    {
      label: 'Resources',
      submenuItems: [
        { label: 'Cricket', routerLink: 'profile' },
        { label: 'Football', routerLink: 'profile' },
        { label: 'Hockey', routerLink: 'profile' },
      ],
      routerLink: '/',
    },
    { label: 'Pricing', routerLink: '/pricing' },
  ];

  // Function to toggle the visibility of submenus for a menu item:
  toggleDropdown(menuItem: MenuItem): void {
    this.menuItems.forEach(
      (item) =>
        (item.showDropdown = item === menuItem && !menuItem.showDropdown)
    );
  }

  // Function to close all open submenus
  closeAllDropdowns(): void {
    this.menuItems.forEach((menuItem) => (menuItem.showDropdown = false));
  }

  // Host listener to detect clicks outside the dropdown menu and close them
  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: any): void {
    if (!targetElement.closest('.dropdown, .anchor-tag, .dropdown-item')) {
      this.closeAllDropdowns();
    }
  }
}
