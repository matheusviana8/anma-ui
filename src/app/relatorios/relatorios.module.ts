import { RelatoriosPedidosComponent } from './relatorios-pedidos/relatorios-pedidos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from './../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CalendarModule,

    SharedModule,
    RelatoriosRoutingModule
  ],
  declarations: [
    RelatorioLancamentosComponent,
    RelatoriosPedidosComponent
  ]
})
export class RelatoriosModule { }
