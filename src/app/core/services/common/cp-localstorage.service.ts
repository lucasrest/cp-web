import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../../../config/storage_keys.config";
import { Token } from "../../interfaces/token";

//Criar Modulo
@Injectable()
export class CPLocalStorageService {

    setToken(token: Token) {
        if(token == null) {
            localStorage.removeItem(STORAGE_KEYS.TOKEN);
        } else {
            localStorage.setItem(STORAGE_KEYS.TOKEN, JSON.stringify(token));
        }
    }

    getToken() : Token {
        let token = localStorage.getItem(STORAGE_KEYS.TOKEN);
        if(token == null) {
            return null;
        } else {
            return JSON.parse(token);
        }
    }

    clearToken() {
        this.setToken(null);
    }

}
