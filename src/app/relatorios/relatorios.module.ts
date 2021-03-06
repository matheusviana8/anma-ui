import { RelatoriosPedidosComponent } from './relatorios-pedidos/relatorios-pedidos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from './../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';
import { RelatorioLancamentosPorDataComponent } from './relatorio-lancamentos-por-data/relatorio-lancamentos-por-data.component';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CalendarModule,
    PanelModule,
    DropdownModule,
    InputTextModule,

    SharedModule,
    RelatoriosRoutingModule
  ],
  declarations: [
    RelatorioLancamentosComponent,
    RelatoriosPedidosComponent,
    RelatorioLancamentosPorDataComponent
  ]
})
export class RelatoriosModule { }
