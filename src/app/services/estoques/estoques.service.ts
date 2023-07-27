import { Observable } from 'rxjs';
import axios from "axios";
import { environment } from "src/enviroments/enviroments";
import { EstoquePostRequestModel } from "src/app/models/estoques/estoque-post.request.model";
import { EstoqueGetResponseModel } from "src/app/models/estoques/estoque-get.response.model";
import { EstoquePutRequestModel } from 'src/app/models/estoques/estoque-put.request.model';
import { getData, isAuthenticated } from 'src/app/helpers/auth.helper';
import { doRequest } from '../commons/commons.service';

export function postEstoque(request: EstoquePostRequestModel):
    Observable<EstoqueGetResponseModel> {
    const config = {
        method: 'post',
        url: `${environment.apiEstoques}`,
        data: request
    };
    return doRequest<EstoqueGetResponseModel>(config);
}

export function putEstoque(request: EstoquePutRequestModel):
    Observable<EstoqueGetResponseModel> {
    const config = {
        method: 'put',
        url: `${environment.apiEstoques}`,
        data: request
    };
    return doRequest<EstoqueGetResponseModel>(config);
}

export function deleteEstoque(id: string)
    : Observable<EstoqueGetResponseModel> {
    const config = {
        method: 'delete',
        url: `${environment.apiEstoques}/${id}`,
    };
    return doRequest<EstoqueGetResponseModel>(config);
}

export function getAllEstoque(): Observable<EstoqueGetResponseModel[]> {
    const config = {
        method: 'get',
        url: `${environment.apiEstoques}`

    };
    return doRequest<EstoqueGetResponseModel[]>(config);
}

export function getByIdEstoque(id: string):
    Observable<EstoqueGetResponseModel> {
    const config = {
        method: 'get',
        url: `${environment.apiEstoques}/${id}`
    };
    return doRequest<EstoqueGetResponseModel>(config);
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
