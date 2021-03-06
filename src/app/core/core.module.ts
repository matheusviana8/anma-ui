import { DashboardService } from './../dashboard/dashboard.service';
import { RelatoriosService } from './../relatorios/relatorios.service';
import { CategoriaService } from './../categorias/categoria.service';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


import { LancamentoService } from './../lancamentos/lancamento.service';
import { ProdutoService } from './../produtos/produto.service';
import { ClienteService } from './../clientes/cliente.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import {SidebarModule} from 'primeng/sidebar';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from './../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { MoneyHttp } from '../seguranca/money-http';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { ToastyService } from 'ng2-toasty';
import { GrupoService } from '../grupos/grupo.service';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,
    SidebarModule,
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    GrowlModule,
    ConfirmDialogModule,

  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    MoneyHttp,

    DashboardService,
    RelatoriosService,
    LancamentoService,
    ClienteService,
    ProdutoService,
    GrupoService,
    CategoriaService,
    ToastyService,
    ConfirmationService,
    MessageService,
    JwtHelperService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
