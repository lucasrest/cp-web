import { Injectable, EventEmitter } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class CpLoadingService {

    public loadingHideEvent: EventEmitter<any> = new EventEmitter();

    constructor(private _spinner: NgxSpinnerService) {
    }

    show() {
        this._spinner.show();
    }

    hide() {
        this._spinner.hide();
        console.log('Emitir');
        this.loadingHideEvent.emit();
        console.log('Emitiu');
    }

}
