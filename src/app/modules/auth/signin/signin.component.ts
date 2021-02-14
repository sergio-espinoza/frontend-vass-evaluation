import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators as vl } from '@angular/forms';
import { prevAnimation } from 'src/app/config';
import { AuthService } from 'src/app/core/auth.service';
import { IPasswordField } from 'src/app/models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {

  public signInForm = new FormGroup({
    username: new FormControl('', [vl.required, vl.minLength(8)]),
    password: new FormControl('', [vl.required, vl.minLength(8)]),
  });

  public passwordConfig: IPasswordField[] = [
    { icon: 'visibility', type: 'password' },
    { icon: 'visibility_off', type: 'text' }
  ];
  public selectedPasswordConfig: 0 | 1 = 0;

  constructor(private authSvc: AuthService) { }

  public alternatePasswordConfig(): void {
    this.selectedPasswordConfig = this.selectedPasswordConfig === 0 ? 1 : 0;
  }

  public signIn(): void {
    if (this.signInForm.invalid) { return; }

    const { username, password } = this.signInForm.value;
    this.authSvc.sign({ username, password });
  }

}
