import { CpBaseComponent } from './../../common/cp-base/cp-base.component';
import { User } from './../../../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { CPLocalStorageService } from '../../../../core/services/common/cp-localstorage.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'cp-profile',
	templateUrl: './cp-profile.component.html',
	styleUrls: ['./cp-profile.component.scss']
})
export class CPProfileComponent extends CpBaseComponent implements OnInit {

	user: User = {id: 1, name: 'Ícaro Pinho Esmeraldo', email: 'icaropinhoe@gmail.com'};

	constructor(
		private _formBuilder: FormBuilder,
		private _cpLocalStorage: CPLocalStorageService
	) {
		super();
	}

	ngOnInit(): void {
		this.formGroup = this._formBuilder.group({
			name: [this.user.name, Validators.required],
			email: [this.user.email, [Validators.required, Validators.email]]
		});
	}

}
