//Função para realizar a chamada de cadastro de usuários na API
import axios from "axios";
import { Observable } from "rxjs";
import { RegisterRequestModel } from "src/app/models/usuarios/register.request.model";
import { RegisterResponseModel } from "src/app/models/usuarios/register.response.model";
import { enviroment } from "src/enviroments/enviroments";

export function postRegister(request: RegisterRequestModel): Observable<RegisterResponseModel>{
    return new Observable<RegisterResponseModel>(observer => {
        axios.post<RegisterResponseModel>(`${enviroment.apiUsuarios}/register`, request)
        .then(response => {
            observer.next(response.data);
            observer.complete();
        })
        .catch(e => {
            observer.error(e);
        });
    })
}