import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-consulta',
  templateUrl: './estoque-consulta.component.html',
  styleUrls: ['./estoque-consulta.component.css']
})
export class EstoqueConsultaComponent {
  columnNames: string[] = ['nome', 'descricao', 'datacriacao',
    'operacoes'];
  //dados do grid
  dataSource = new MatTableDataSource<DataSourceModel>([
    {
      nome: 'Estoque A', descricao: 'Estoque Teste',
      datacriacao: new Date()
    },
    {
      nome: 'Estoque B', descricao: 'Estoque Teste',
      datacriacao: new Date()
    },
    {
      nome: 'Estoque C', descricao: 'Estoque Teste',
      datacriacao: new Date()
    },
    {
      nome: 'Estoque D', descricao: 'Estoque Teste',
      datacriacao: new Date()
    },
  ]);

  //construtor
  constructor(
    private router: Router
  ) {
  }
  //função para capturar o evento de exclusão
  onDelete(id: number): void {
    if (window.confirm('Deseja realment excluir o estoque selecionado?')) {
      //TODO
    }
  }
  //função para capturar o evento de edição
  onEdit(id: number): void {
    this.router.navigate(['/admin/estoque-edicao', id]);
  }
}
class DataSourceModel {
  nome: string = '';
  descricao: string = '';
  datacriacao: Date | null = null;
}


