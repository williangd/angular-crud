import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { VendasComponent } from './vendas/vendas.component';
import { ProdutosComponent } from './produtos/produtos.component';

const appRoutes: Routes = [
  { path: '', component: VendasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
