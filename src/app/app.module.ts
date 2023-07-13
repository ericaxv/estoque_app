import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
