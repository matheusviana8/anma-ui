import { Component, OnInit } from '@angular/core';

import { RelatoriosService } from '../relatorios.service';
import { LancamentoFiltro } from 'src/app/lancamentos/lancamento.service';

@Component({
  selector: 'app-relatorio-lancamentos-por-data',
  templateUrl: './relatorio-lancamentos-por-data.component.html',
  styleUrls: ['./relatorio-lancamentos-por-data.component.css']
})
export class RelatorioLancamentosPorDataComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];
  filtro = new LancamentoFiltro();
  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit() {
  }

  gerar() {
    this.relatoriosService.relatorioLancamentosPorData(this.filtro)
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);

        window.open(url);
      });
  }


}
