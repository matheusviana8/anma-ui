import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { AuthService } from './../../seguranca/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { CategoriaService, CategoriaFiltro } from './../categoria.service';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];
  totalRegistros = 0;
  filtro = new CategoriaFiltro();
  categorias = [];

  @ViewChild('tabela') grid;
  //@ViewChild('tabela', {static: true}) grid: Table;

  constructor(
    private categoriaService: CategoriaService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de Categorias');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    //console.log('pesquisar:' + pagina);
    this.categoriaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.categorias = resultado.categorias;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    //console.log('ao mudar pag');
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(categoria: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(categoria);
      }
    });
  }

  excluir(categoria: any) {
    this.categoriaService.excluir(categoria.id)
      .then(() => {
        //this.pesquisar();
        //this.grid.first = 0;
        //this.grid.reset();
         if (this.grid.first === 0) {
            this.pesquisar();
         } else {
            this.grid.first = 0;
         }
         this.messageService.add({ severity: 'success', detail: 'Categoria excluída com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
