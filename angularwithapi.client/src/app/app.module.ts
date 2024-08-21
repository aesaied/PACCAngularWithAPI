import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryViewComponent } from './categories/category-view/category-view.component';
import { ListOfProductsComponent } from './Products/list-of-products/list-of-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ForecastListComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    MainlayoutComponent,
    CategoryListComponent,
    CategoryViewComponent,
    ListOfProductsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
