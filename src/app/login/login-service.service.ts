import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class LoginServiceService {
  [x: string]: any;

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  constructor(private router: Router){}
  
  signIn(user: User){
    if((user.email === 'user@email.com' || user.email === 'usuario@email.com') 
    && user.password === '123456'){
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    } else {
      this.authenticated = false;
    }
    
  }
  logout(){
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }
  isAuthenticated(){
    return this.authenticated;
  }
  private ShowNavBar(ifShow: boolean){
    this.showNavBarEmitter.emit(ifShow);
  }
}
