import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryViewComponent } from './categories/category-view/category-view.component';

const routes: Routes = [
  { path: '', component: ForecastListComponent, pathMatch: "full" }
  ,
  {
    path: 'forecast', component: MainlayoutComponent, children:
      [{ path: '', component: ForecastListComponent, pathMatch: 'full' }]

  }

  , {
    path: 'categories', component: MainlayoutComponent, children: [

      { path: '', component: CategoryListComponent, pathMatch: 'full' },
      { path: 'view/:id', component: CategoryViewComponent }


    ]
  }

  , {
    path: 'products', component: MainlayoutComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductListComponent },
      { path: 'view/:id', component: ProductDetailComponent },
      { path: 'view', component: ProductDetailComponent },
      { path: 'create', component: ProductCreateComponent },
      { path: 'edit/:id', component: ProductEditComponent },


    ]

  }

  ,
  { path: '**', component: NotFoundComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
