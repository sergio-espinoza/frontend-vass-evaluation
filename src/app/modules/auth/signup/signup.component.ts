import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators as vl } from '@angular/forms';
import { prevAnimation, ƒMatchedValidator } from 'src/app/config';
import { AuthService } from 'src/app/core/auth.service';
import { IPasswordField, IUser } from 'src/app/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public signUpForm = new FormGroup({
    username: new FormControl('', [vl.required, vl.minLength(8), vl.maxLength(30)]),
    password: new FormControl('', [vl.required, vl.minLength(8), vl.maxLength(30)]),
    confirmPassword: new FormControl('', [vl.required, vl.minLength(8), vl.maxLength(30)])
  }, {
    validators: [ƒMatchedValidator('password', 'confirmPassword')]
  });

  public passwordConfig: IPasswordField[] = [
    { icon: 'visibility', type: 'password' },
    { icon: 'visibility_off', type: 'text' }
  ];
  public selectedPasswordConfig: 0 | 1 = 0;

  constructor(
    private authSvc: AuthService
  ) { }

  public alternatePasswordConfig(): void {
    this.selectedPasswordConfig = this.selectedPasswordConfig === 0 ? 1 : 0;
  }

  public signUp(): void {
    if (this.signUpForm.invalid) { return; }

    const { username, password } = this.signUpForm.value;
    this.authSvc.sign({ username, password });
  }

}
