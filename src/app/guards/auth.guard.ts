import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  canActivate() {
    if(this.authService.userSignedIn()) {
      console.log('!!!!!')
      return true;
    } else {
      console.log('??????????')
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}