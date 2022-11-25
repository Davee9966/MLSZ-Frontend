import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  constructor(private router: Router, private authService: AuthService) {}
  logout() {
    localStorage.setItem('token', '');
    this.authService.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
}
