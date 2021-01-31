import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

import { User } from './user.model';

@Injectable()

export class AuthService {
  constructor(private tokenService: Angular2TokenService) { }

  signUp(user: User): Observable<Response>{
    return this.tokenService.registerAccount(user as any)
      .catch(this.handleErrors);
  }
  
  SignIn(uid: string, password: string) {
    // call Angular2-Token signIn method here
    // returns a Observable<Response>
  }
  
  signOut() {
    // call Angular2-Token signOut method here
    // returns a Observable<Response>
  }
  
  userSignedIn() {
    return this.tokenService.userSignedIn();
  }

  private handleErrors(error: Response) {
    console.log('Saving error in log file => details:', error);
    return Observable.throw(error);
  }
}