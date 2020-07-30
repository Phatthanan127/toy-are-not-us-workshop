import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Import Component
import { ToyProductComponent } from './toy-product/toy-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainComponent } from './main/main.component';
import { from } from 'rxjs';

//Create component routes path
const routes: Routes = [
  { path: 'main', component: MainComponent},  //homepage
  { path: 'toy-product', component: ToyProductComponent},
  { path: 'product-detail', component: ProductDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
