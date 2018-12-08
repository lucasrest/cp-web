import { Injectable } from "@angular/core";
import { TokenDTO } from "../../models/security/dto/token-dto";
import { STORAGE_KEYS } from "../../../config/storage_keys.config";

//Criar Modulo
@Injectable()
export class CPLocalStorageService {

    setToken(tokenDto: TokenDTO) {
        if(tokenDto == null) {
            localStorage.removeItem(STORAGE_KEYS.TOKEN);
        } else {
            localStorage.setItem(STORAGE_KEYS.TOKEN, JSON.stringify(tokenDto));
        }
    }

    getToken() : TokenDTO {
        let tokenDto = localStorage.getItem(STORAGE_KEYS.TOKEN);
        if(tokenDto == null) {
            return null;
        } else {
            return JSON.parse(tokenDto);
        }
    }

    clearToken() {
        this.setToken(null);
    }

}
