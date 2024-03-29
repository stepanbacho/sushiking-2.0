import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OrderConditionComponent } from './pages/order-condition/order-condition.component';
import { NewsAndDiscountsComponent } from './pages/news-and-discounts/news-and-discounts.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { OfferAgreementComponent } from './pages/offer-agreement/offer-agreement.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'products/:categoty/:name', component: ProductDetailsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'order-conditions', component: OrderConditionComponent },
  { path: 'news-and-discounts', component: NewsAndDiscountsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'offer-agreement', component: OfferAgreementComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '',  pathMatch: 'full', redirectTo: 'category'},
      { path: 'category', component: AdminCategoryComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'orders', component: AdminOrdersComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
