import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'fournisseurs', component: ListFournisseurComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: '',redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
