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

}
