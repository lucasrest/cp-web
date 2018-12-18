import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CpLoadingService } from '../../../../core/services/common/cp-loading.service';

@Component({
    selector: 'm-cp-base',
    templateUrl: './cp-base.component.html',
    styleUrls: ['./cp-base.component.scss']
})
export class CpBaseComponent implements OnInit {

    protected formGroup: FormGroup;

    private _alertSubscription: Subscription;

    constructor(
        protected _loading: CpLoadingService,
		protected _cdr: ChangeDetectorRef
    ) {
        this._alertSubscription = this._loading.loadingHideEvent.subscribe( () => {
			this._cdr.detectChanges();
        });
    }

    ngOnInit() {
    }


	ngOnDestroy(): void {
        this._alertSubscription.unsubscribe();
        console.log(this._alertSubscription);
	}

    protected getFieldErrors(fieldName: string) {
        return this.getField(fieldName).errors;
    }

    protected getField(fieldName: string) {
        return this.formGroup.get(fieldName);
    }

    compareSelect(value1: any, value2: any): boolean {
        return value1 && value2 ? value1.id === value2.id : value1 === value2;
    }

}
