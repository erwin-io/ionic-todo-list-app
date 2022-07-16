import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})

export class SidenavPage implements OnInit {

  active = '';

  navigation = [
    {
      name: 'Home',
      link: '/home',
      icon: 'home'
    },
    {
      name: 'About',
      link: '/about',
      icon: 'person-circle'
    },
    {
      name: 'Blog',
      link: '/blog',
      icon: 'albums'
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: 'call'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });
  }

  ngOnInit() { }

}
