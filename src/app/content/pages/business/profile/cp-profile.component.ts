import { CpBaseComponent } from './../../common/cp-base/cp-base.component';
import { User } from './../../../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { CPLocalStorageService } from '../../../../core/services/common/cp-localstorage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../core/auth/user.service';
import { UserDTO } from '../../../../core/models/security/dto/user-dto';

@Component({
	selector: 'cp-profile',
	templateUrl: './cp-profile.component.html',
	styleUrls: ['./cp-profile.component.scss']
})
export class CPProfileComponent extends CpBaseComponent implements OnInit {

	user: UserDTO;

	constructor(
		private _userService: UserService,
		private _formBuilder: FormBuilder,
		private _cpLocalStorage: CPLocalStorageService
	) {
		super();
		this.fillUser();
	}

	ngOnInit(): void {
		this.formGroup = this._formBuilder.group({
			name: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]]
		});


	}

	fillUser() {
		let user: User = this._cpLocalStorage.getLoggedUser();
		console.log(user);
		if (user) {
			this._userService.findByIdReduced(user.id)
				.subscribe((res) => {
					this.user = res.data;
					this.formGroup.setValue({
						name: this.user.name,
						email: this.user.email
					})
				}, err => {
				});
		}
	}

}
