import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { MessageService } from 'primeng/api';
import { VendedorService } from 'src/app/vendedores/vendedor.service';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {
  categoria = new Categoria();

  tipos = [{
    "value": "RECEITA",
    "label": "RECEITA"
}, {
    "value": "DESPESA",
    "label": "DESPESA"
}]


  constructor(
    private categoriaService: CategoriaService,
    private vendedorService: VendedorService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title

  ) { }



  ngOnInit() {
    const idCategoria = this.route.snapshot.params['id'];

    this.title.setTitle('Novo categoria');

    if (idCategoria) {
      this.carregarCategoria(idCategoria);
    }

  }

  carregarCategoria(id: number) {
    this.categoriaService.buscarPorCodigo(id)
      .then(categoria => {
        this.categoria = categoria;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarCategoria(form);
    } else {
      this.adicionarCategoria(form);
    }
  }

  adicionarCategoria(form: FormControl) {
    this.categoriaService.adicionar(this.categoria)
      .then(categoriaAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Categoria adicionado com sucesso!' });

        // form.reset();
        // this.lancamento = new Lancamento();
        this.router.navigate(['/categorias', categoriaAdicionado.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCategoria(form: FormControl) {
    this.categoriaService.atualizar(this.categoria)
      .then(categoria => {
        this.categoria = categoria;

        this.messageService.add({ severity: 'success', detail: 'Categoria alterado com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.categoria.id)
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.categoria = new Categoria();
    }.bind(this), 1);

    this.router.navigate(['/categorias/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de categoria: ${this.categoria.nome}`);
  }

}
