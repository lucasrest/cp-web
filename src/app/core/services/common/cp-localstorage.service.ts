import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../../../config/storage_keys.config";
import { CPToken } from "../../interfaces/token";

//Criar Modulo
@Injectable()
export class CPLocalStorageService {

    setToken(cpToken: CPToken) {
        if(cpToken == null) {
            localStorage.removeItem(STORAGE_KEYS.TOKEN);
        } else {
            localStorage.setItem(STORAGE_KEYS.TOKEN, JSON.stringify(cpToken));
        }
    }

    getToken() : CPToken {
        let cpToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
        if(cpToken == null) {
            return null;
        } else {
            return JSON.parse(cpToken);
        }
    }

    clearToken() {
        this.setToken(null);
    }

}
