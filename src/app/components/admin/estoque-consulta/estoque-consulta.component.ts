import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { deleteEstoque, getAllEstoque } from 'src/app/services/estoques/estoques.service';
import { EstoqueGetResponseModel } from 'src/app/models/estoques/estoque-get.response.model';

@Component({
  selector: 'app-estoque-consulta',
  templateUrl: './estoque-consulta.component.html',
  styleUrls: ['./estoque-consulta.component.css']
})
export class EstoqueConsultaComponent implements OnInit {
  //construtor
  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) {}

  resultado: string ='';
  //atributos
  columnNames: string[] = ['nome', 'descricao', 'datacriacao','operacoes'];
  //dados do grid
  dataSource = new MatTableDataSource<DataSourceModel>();

  ngOnInit(): void {
    this.spinnerService.show();
    getAllEstoque().subscribe({
      next: (data) => {
        const dados: any[] = [];
        data.forEach((item: EstoqueGetResponseModel) => {
          dados.push({
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            datacriacao: item.dataHoraCadastro
          })
        });
        this.dataSource.data = dados;
      },
      error: (e) => {
        console.log(e.response.data);
      }
    }).add(() => {
      this.spinnerService.hide();
    });
  }
  //função para capturar o evento de exclusão
  onDelete(id: string): void {
    if (window.confirm('Deseja realmente excluir o estoque selecionado?')) {
      this.spinnerService.show();
      deleteEstoque(id)
      .subscribe({
        next: (data) => {
          this.resultado = `Estoque ${data.nome} excluído com sucesso!`;
          this.ngOnInit();
        },
        error: (e) => {
          this.resultado = 'Falha ao excluir o estoque.';
          console.log(e.error);
        }
      }).add(() => {
        this.spinnerService.hide();
      })
    }
  }
  //função para capturar o evento de edição
  onEdit(id: string): void {
    this.router.navigate(['/admin/estoque-edicao', id]);
  }
}

class DataSourceModel {
  id: string = '';
  nome: string = '';
  descricao: string = '';
  datacriacao: Date | null = null;
}


