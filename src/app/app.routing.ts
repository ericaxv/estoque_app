import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/home/login/login.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { PasswordRecoverComponent } from "./components/home/password-recover/password-recover.component";

const routes: Routes = [
    {
        path: 'home/login',
        component: LoginComponent
    },
    {
        path: 'home/register',
        component: RegisterComponent,
    },
    {
        path: 'home/password-recover',
        component: PasswordRecoverComponent

    },
    {
        path: '',
        pathMatch: 'full', //qndo estiver na raiz do projeto redirecionar para home/login
        redirectTo: 'home/login'
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{

}