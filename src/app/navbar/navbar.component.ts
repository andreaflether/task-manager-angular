import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'navbar', 
  templateUrl: './navbar.component.html'
})

export class NavbarComponent{
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signOutUser() {
    this.authService.signOut()
      .subscribe(
        () => this.router.navigate(['/sign-in'])
      )
  }

  userSignedIn() {
    return this.authService.userSignedIn();
  }
}