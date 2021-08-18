import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OrderConditionComponent } from './pages/order-condition/order-condition.component';
import { NewsAndDiscountsComponent } from './pages/news-and-discounts/news-and-discounts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OfferAgreementComponent } from './pages/offer-agreement/offer-agreement.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    BasketComponent,
    PaymentComponent,
    OrderConditionComponent,
    NewsAndDiscountsComponent,
    AboutUsComponent,
    OfferAgreementComponent,
    ContactsComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
