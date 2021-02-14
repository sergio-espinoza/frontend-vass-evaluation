import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      { path: 'signin', component: SigninComponent, data: { animation: 'PreviousPage' } },
      { path: 'signup', component: SignupComponent, data: { animation: 'NextPage' } },
      { path: '', redirectTo: 'signin', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
