import * as CryptoJS from "crypto-js";
import { enviroment } from "src/enviroments/enviroments";

export function encrypt(data: string): string {
    const encrypt = CryptoJS.AES.encrypt(data, enviroment.chaveCriptografia).toString();
    return encrypt;
}

export function decrypt(data: string): string {
    const decrypt = CryptoJS.AES.decrypt(data, enviroment.chaveCriptografia)
            .toString(CryptoJS.enc.Utf8);
    return decrypt;
}

