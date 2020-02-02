import { LancamentoFiltro } from './../lancamentos/lancamento.service';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import * as moment from 'moment';

import { environment } from './../../environments/environment';
import { MoneyHttp } from '../seguranca/money-http';

@Injectable()
export class RelatoriosService {

  lancamentosUrl: string;

  constructor(private http: MoneyHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`;
  }

  relatorioLancamentosPorCliente(inicio: Date, fim: Date) {
    let params = new HttpParams();

    params = params.set('inicio', moment(inicio).format('YYYY-MM-DD'));
    params = params.set('fim', moment(fim).format('YYYY-MM-DD'));

    return this.http.get(`${this.lancamentosUrl}/relatorios/por-cliente`,
        { params, responseType: 'blob' })
        .toPromise()
        .then(response => response);
  }

  relatorioLancamentosPorData(filtro: LancamentoFiltro) {
    let params = new HttpParams();

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.tipo) {
      params = params.append('tipo', filtro.tipo);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.append('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params = params.append('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }


    return this.http.get(`${this.lancamentosUrl}/relatorios/por-data`,
        { params, responseType: 'blob' })
        .toPromise()
        .then(response => response);
  }
}
