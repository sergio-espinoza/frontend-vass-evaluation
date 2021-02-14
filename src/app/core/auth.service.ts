import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models';

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUser?: IUser;

  constructor(private router: Router) { }

  public sign(user: IUser): void {
    this.currentUser = user;
    this.router.navigate(['/home']);
  }

}
