import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
     { path: '/books', title: 'OldBooks',  icon:'book', class: '' },
     { path: '/equipments', title: 'Equipments',  icon:'content_paste', class: '' },
     { path: '/qna', title: 'QnA',  icon:'library_books', class: '' },
     { path: '/vblog', title: 'VBlog',  icon:'video_library', class: '' },
     { path: '/studymaterial', title: 'Study Material',  icon:'bubble_chart', class: '' },
    
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
