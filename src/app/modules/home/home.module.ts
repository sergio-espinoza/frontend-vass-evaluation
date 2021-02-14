import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavListComponent } from './components/nav-list/nav-list.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavConfigComponent } from './components/nav-config/nav-config.component';


@NgModule({
  declarations: [HomeComponent, NavListComponent, NavConfigComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
