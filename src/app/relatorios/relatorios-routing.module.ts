import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatoriosPedidosComponent } from './relatorios-pedidos/relatorios-pedidos.component';
import { AuthGuard } from '../seguranca/auth.guard';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';

const routes: Routes = [
  {
    path: 'pedidos',
    component: RelatoriosPedidosComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_PESQUISAR_PEDIDO']}
  },
  {
    path: 'lancamentos',
    component: RelatorioLancamentosComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
