import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    {
      path: 'product', loadChildren: () =>
        import('./product/product.module').then(m => m.ProductModule)
    },
    {
      path: 'customer', loadChildren: () =>
        import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
      path: '', redirectTo: 'product', pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
