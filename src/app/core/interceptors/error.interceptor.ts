import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiResponse } from "../models/api-response";
import { HttpStatusCode } from "../constants/http-status-code";
import { ErrorMessages } from "../constants/error-messages";
import { ToastrService } from "ngx-toastr";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";
import { ENDPOINTS } from "../constants/endpoints";
import { ROTAS } from "../constants/rotas";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private toast: ToastrService,
        private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err, caught) => {
                let apiResponse: ApiResponse;
                if (err.error.message) {
                    apiResponse = err.error;
                } else {
                    apiResponse = {
                        status: err.status,
                        message: this.getMessage(err)
                    }
                }

                this.redirectToLoginIfDeniedAccess(err.status);

                this.toast.error(apiResponse.message);

                return throwError(apiResponse);
            }) as any);
    }


    redirectToLoginIfDeniedAccess(status) {
        if (status == HttpStatusCode.UNAUTHORIZED ||
            status == HttpStatusCode.FORBIDDEN) {
            this.router.navigate([ROTAS.LOGIN]);
        }
    }

    getMessage(err: any): string {
        if (err.message.includes(ErrorMessages.UNKNOWN_URL)) {
            return ErrorMessages.UNKNOWN_API;
        } else {
            return err.message;
        }

    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}
