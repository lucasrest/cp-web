import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";

//@Injectable()
export class ErrorInterceptor /* implements HttpInterceptor  */{}
/* 
    constructor(public alertService: CPAlertService,
        private _event: Events) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch((err, caught) => {
                let apiResponse: ApiResponse;
                if (err.error.message) {
                    apiResponse = err.error;
                } else {
                    apiResponse = {
                        status: err.status,
                        message: this.getMessage(err)
                    }
                }

                this.launchDeniedAccessEvent(err.status);

                this.alertService.create({ apiResponse }).present();

                return Observable.throw(apiResponse);
            }) as any;
    }


    launchDeniedAccessEvent(status) {
        if (status == HttpStatusCode.UNAUTHORIZED ||
            status == HttpStatusCode.FORBIDDEN) {
            this._event.publish(Channels.ACCESS_DENID);
        }
    }

    getMessage(err: any): string {
        if (err.message.includes(ErrorMessages.UNKNOWN_URL)) {
            return ErrorMessages.UNKNOWN_API;
        } else {
            return err.message;
        }

    } */

/* 
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
} */
