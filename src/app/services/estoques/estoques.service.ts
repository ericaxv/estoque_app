import { Observable } from 'rxjs';
import axios from "axios";
import { environment } from "src/enviroments/enviroments";
import { EstoquePostRequestModel } from "src/app/models/estoques/estoque-post.request.model";
import { EstoqueGetResponseModel } from "src/app/models/estoques/estoque-get.response.model";
import { EstoquePutRequestModel } from 'src/app/models/estoques/estoque-put.request.model';
import { getData, isAuthenticated } from 'src/app/helpers/auth.helper';

export function postEstoque(request: EstoquePostRequestModel):
    Observable<EstoqueGetResponseModel> {
    return new Observable<EstoqueGetResponseModel>(observer => {
        axios.post<EstoqueGetResponseModel>
            (`${environment.apiEstoques}`, request)

            .then(
                response => {
                    observer.next(response.data);
                    observer.complete();
                }
            )
            .catch(
                e => { observer.error(e) }
            )
    });
}
export function putEstoque(request: EstoquePutRequestModel):
    Observable<EstoqueGetResponseModel> {
    return new Observable<EstoqueGetResponseModel>(observer => {
        axios.put<EstoqueGetResponseModel>
            (`${environment.apiEstoques}`, request)

            .then(
                response => {
                    observer.next(response.data);
                    observer.complete();
                }
            )
            .catch(
                e => { observer.error(e) }
            )
    });
}
export function deleteEstoque(id: string)
    : Observable<EstoqueGetResponseModel> {
    return new Observable<EstoqueGetResponseModel>
        (observer => {
            axios.delete<EstoqueGetResponseModel>
                (`${environment.apiEstoques}/${id}`)

                .then(
                    response => {
                        observer.next(response.data);
                        observer.complete();
                    }
                )
                .catch(
                    e => { observer.error(e) }
                )
        });
}
export function getAllEstoque(): Observable<EstoqueGetResponseModel[]> {
    return new Observable<EstoqueGetResponseModel[]>(observer => {
        axios.get<EstoqueGetResponseModel[]>
            (`${environment.apiEstoques}`)

            .then(
                response => {
                    observer.next(response.data);
                    observer.complete();
                }
            )
            .catch(
                e => { observer.error(e) }
            )
    });
}
export function getByIdEstoque(id: string):
    Observable<EstoqueGetResponseModel> {
    return new Observable<EstoqueGetResponseModel>
        (observer => {
            axios.get<EstoqueGetResponseModel>
                (`${environment.apiEstoques}/${id}`)

                .then(
                    response => {
                        observer.next(response.data);
                        observer.complete();
                    }
                )
                .catch(
                    e => { observer.error(e) }
                )
        });
}

//criando o interceptor através do AXIOS
axios.interceptors.request.use(
    config => {
        //verificando se a requisição é para o endpoint de estoque
        if (config.url?.includes(environment.apiEstoques)) {
            //verificar se o usuário está autenticado
            if (isAuthenticated()) {
                //capturar o token na local storage
                let accessToken = getData()?.accessToken;
                config.headers['Authorization'] = `Bearer ${accessToken}`;

            }
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
