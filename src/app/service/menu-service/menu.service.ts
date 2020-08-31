import { Injectable } from '@angular/core';
import { NavBarItem } from 'src/app/interfaces/common.types';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuService: NavBarItem[];
  constructor() { }

  public getMenuItems(): NavBarItem[] {
    this.menuService = [
      {
        label: 'Forum',
        iconClass: 'icofont-chat',
        link: ''
      },
      {
        label: 'Checkpoints',
        iconClass: 'icofont-google-map',
        link: ''
      },
      {
        label: 'Button',
        iconClass: 'icofont-warning-alt',
        link: ''
      },
      {
        label: 'Settings',
        iconClass: 'icofont-gear-alt',
        link: ''
      },
      {
        label: 'Profile',
        iconClass: 'icofont-user',
        link: '/profile'
      }
    ];
    return this.menuService;
  }
}
