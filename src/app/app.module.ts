import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/home/login/login.component';
import { RoutingModule } from './app.routing';
import { MaterialModule } from './app.material';
import { RegisterComponent } from './components/home/register/register.component';
import { PasswordRecoverComponent } from './components/home/password-recover/password-recover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { EstoqueCadastroComponent } from './components/admin/estoque-cadastro/estoque-cadastro.component';
import { EstoqueConsultaComponent } from './components/admin/estoque-consulta/estoque-consulta.component';
import { EstoqueEdicaoComponent } from './components/admin/estoque-edicao/estoque-edicao.component';
import { MessagesComponent } from './components/shared/messages/messages.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProdutosCadastroComponent } from './components/admin/produtos-cadastro/produtos-cadastro.component';
import { ProdutosConsultaComponent } from './components/admin/produtos-consulta/produtos-consulta.component';
import { ProdutosEdicaoComponent } from './components/admin/produtos-edicao/produtos-edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoverComponent,
    DashboardComponent,
    EstoqueCadastroComponent,
    EstoqueConsultaComponent,
    EstoqueEdicaoComponent,
    MessagesComponent,
    ProdutosCadastroComponent,
    ProdutosConsultaComponent,
    ProdutosEdicaoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ChartModule
  ],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
