
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'lancamentos', loadChildren: './lancamentos/lancamentos.module#LancamentosModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasModule' },
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule' },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosModule' },
  { path: 'grupos', loadChildren: './grupos/grupos.module#GruposModule' },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosModule' },
  { path: 'relatorios', loadChildren: './relatorios/relatorios.module#RelatoriosModule' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
