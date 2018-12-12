import { CpBaseComponent } from './../../common/cp-base/cp-base.component';
import { User } from './../../../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { CPLocalStorageService } from '../../../../core/services/common/cp-localstorage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../core/auth/user.service';
import { UserDTO } from '../../../../core/models/security/dto/user-dto';
import { CpLoadingService } from '../../../../core/services/common/cp-loading.service';
import { ToastrService } from 'ngx-toastr';
import { RegionService } from '../../../../core/services/business/region.service';
import { Region } from '../../../../core/models/business/region';

@Component({
	selector: 'cp-profile',
	templateUrl: './cp-profile.component.html',
	styleUrls: ['./cp-profile.component.scss']
})
export class CPProfileComponent extends CpBaseComponent implements OnInit {

	user: UserDTO;
	regions: Region[] = [];

	private _currentUser: User;

	constructor(
		private _userService: UserService,
		private _formBuilder: FormBuilder,
		private _cpLocalStorageService: CPLocalStorageService,
		private _cpLoadingService: CpLoadingService,
		private _toastr: ToastrService,
		private _regionService: RegionService
	) {
		super();
		this.fillUser();
	}

	ngOnInit(): void {
		this.formGroup = this._formBuilder.group({
			name: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			filterByState: [false],
			region: [null, Validators.required]
		});

		this.fetchRegions();
	}

	fillUser() {
		this._currentUser = this._cpLocalStorageService.getLoggedUser();
		if (this._currentUser) {
			this._userService.findByIdReduced(this._currentUser.id)
				.subscribe((res) => {
					this.user = res.data;
					this.fillForm();
				}, err => {
				});
		}
	}

	cancelModifications() {
		this.fillForm();
		this.formGroup.markAsPristine();
	}

	saveModifications() {
		this._cpLoadingService.show();
		this._currentUser.name = this.formGroup.value.name;
		this._currentUser.email = this.formGroup.value.email;
		this._userService.update(this._currentUser)
			.subscribe(apiResponse => {
				this.user.name = apiResponse.data.name;
				this.user.email = apiResponse.data.email;
				this._cpLoadingService.hide();
				this._toastr.success(apiResponse.message);
			}, err => {
				this._cpLoadingService.hide();
			});
	}

	fillForm() {
		this.formGroup.setValue({
			name: this._currentUser.name,
			email: this._currentUser.email,
			filterByState: this._currentUser.filterByState,
			region: this._currentUser.region
		})
	}

	fetchRegions() {
		this._regionService.getReduced().subscribe(
			apiResponse => {
				this.regions = apiResponse.data;
			},
			error => {}
		)
	  }

}
