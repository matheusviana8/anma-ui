import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { environment } from './../../environments/environment';
import { Categoria } from './../core/model';
import { MoneyHttp } from '../seguranca/money-http';

export class CategoriaFiltro {
  id: string;
  nome: string;
  tipo: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: MoneyHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  pesquisar(filtro: CategoriaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.id) {
      params = params.append('id', filtro.id);
    }

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    if (filtro.tipo) {
      params = params.append('tipo', filtro.tipo);
    }

    return this.http.get<any>(`${this.categoriasUrl}`,
        { params })
      .toPromise()
      .then(response => {
        const categorias = response.content;

        const resultado = {
          categorias: categorias,
          total: response.totalElements
        };

        return resultado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.categoriasUrl}/${id}`)
      .toPromise()
      .then(() => null);

  }

  adicionar(categoria: Categoria): Promise<Categoria> {
    return this.http.post<Categoria>(this.categoriasUrl, categoria)
      .toPromise();
  }

  atualizar(categoria: Categoria): Promise<Categoria> {
    return this.http.put<Categoria>(`${this.categoriasUrl}/${categoria.id}`, categoria)
      .toPromise()
      .then(response => {
        const categoriaAlterado = response;

        //this.converterStringsParaDatas([clienteAlterado]);

        return categoriaAlterado;
      });
  }

  buscarPorCodigo(id: number): Promise<Categoria> {
    return this.http.get<Categoria>(`${this.categoriasUrl}/${id}`)
      .toPromise()
      .then(response => {
        const categoria = response;

        return categoria;
      });
  }

}
