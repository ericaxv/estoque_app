//Função para realizar a chamada de cadastro de usuários na API
import axios from "axios";
import { Observable } from "rxjs";
import { CriarContaRequestModel } from "src/app/models/usuarios/criar-conta.request.model";
import { CriarContaResponseModel } from "src/app/models/usuarios/criar-conta.response.model";
import { enviroment } from "src/enviroments/enviroments";

export function postCriarConta(request: CriarContaRequestModel): Observable<CriarContaResponseModel>{
    return new Observable<CriarContaResponseModel>(observer => {
        axios.post<CriarContaResponseModel>(`${enviroment.apiUsuarios}/criar-conta`, request)
        .then(response => {
            observer.next(response.data);
            observer.complete();
        })
        .catch(e => {
            observer.error(e);
        });
    })
}