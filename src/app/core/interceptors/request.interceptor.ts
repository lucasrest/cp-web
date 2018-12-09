import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CPLocalStorageService } from "../services/common/cp-localstorage.service";
import { Token } from "../interfaces/token";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(public storageService: CPLocalStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>  {
        if(req.url.includes('login'))
            return next.handle(req);
        let token: Token = this.getToken();
        if (token) {
            const authReq = req.clone({
               headers: req.headers.set('Authorization', token.token)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }

    private getToken() {
        let token = this.storageService.getToken();
        if(token) {
            if(Array.isArray(token)) {
                return token[0];
            }
            return token;
        }
        return null;
    }
}

export const RequestInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
}
