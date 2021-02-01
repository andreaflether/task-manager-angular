import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

import { User } from './user.model';

@Injectable()

export class AuthService {
  constructor(private tokenService: TokenService) { }

  signUp(user: User): Observable<Response>{
    return this.tokenService.registerAccount(user as any)
      .catch(this.handleErrors);
  }
  
  signIn(uid: string, password: string): Observable<Response> {
    let signInData = {
      email: uid,
      password: password
    }
    return this.tokenService.signIn(signInData)
      .catch(this.handleErrors);
  }
  
  signOut(): Observable<Response> {
    return this.tokenService.signOut()
      .catch(this.handleErrors);
  }
  
  userSignedIn(): boolean{
    return this.tokenService.userSignedIn();
  }

  private handleErrors(error: Response) {
    console.log('Saving error in log file => details:', error);
    return Observable.throw(error);
  }
}