import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Cart/Cart.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { SellerComponent } from './Seller/Seller.component';

const routes: Routes = [
  {
    path: "Home", component:HomeComponent
  },
  {
    path: "Seller", component:SellerComponent
  },
  {
    path: "Login", component:LoginComponent
  },
  {
    path: "Cart", component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
