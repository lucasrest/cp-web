import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'm-cp-base',
    templateUrl: './cp-base.component.html',
    styleUrls: ['./cp-base.component.scss']
})
export class CpBaseComponent implements OnInit {
    
    protected formGroup: FormGroup;
    
    constructor() { }
    
    ngOnInit() {
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
