import * as CryptoJS from "crypto-js";
import { environment } from "src/enviroments/enviroments";

export function encrypt(data: string): string {
    const encrypt = CryptoJS.AES.encrypt(data, environment.chaveCriptografia).toString();
    return encrypt;
}

export function decrypt(data: string): string {
    const decrypt = CryptoJS.AES.decrypt(data, environment.chaveCriptografia)
            .toString(CryptoJS.enc.Utf8);
    return decrypt;
}

