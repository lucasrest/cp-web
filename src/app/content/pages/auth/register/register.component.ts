import {
	Component,
	OnInit,
	Input,
	Output,
	ViewChild,
	ElementRef,
	ChangeDetectorRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as objectPath from 'object-path';
import { AuthNoticeService } from '../../../../core/auth/auth-notice.service';
import { SpinnerButtonOptions } from '../../../partials/content/general/spinner-button/button-options.interface';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../../core/auth/user.service';
import { CpLoadingService } from '../../../../core/services/common/cp-loading.service';
import { ToastrService } from 'ngx-toastr';
import { ROTAS } from '../../../../core/constants/rotas';
import { CpBaseComponent } from '../../common/cp-base/cp-base.component';
import {  Router } from '@angular/router';

@Component({
	selector: 'm-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends CpBaseComponent implements OnInit {

	typePassword: string = 'password';

	hide = false;

	@Input() action: string;
	@Output() actionChange = new Subject<string>();
	public loading = false;

	errors: any = [];

	spinner: SpinnerButtonOptions = {
		active: false,
		spinnerSize: 18,
		raised: true,
		buttonColor: 'primary',
		spinnerColor: 'accent',
		fullWidth: false
	};

	constructor(
		private userService: UserService,
		private cdr: ChangeDetectorRef,
		private router: Router,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private cpLoading: CpLoadingService,
		private _formBuilder: FormBuilder,
	) {
		super();
	}

	ngOnInit() {
		this.formGroup = this._formBuilder.group({
			name: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required, Validators.minLength(6)]],
			agree: false
		});
	}

	loginPage(event: Event) {
		this.authNoticeService.setNotice('');
		event.preventDefault();
		this.action = 'login';
		this.actionChange.next(this.action);
	}

	changeTypePassword() {
		if (this.hide) {
			this.typePassword = 'text';
		} else {
			this.typePassword = 'password';
		}
	}

	submit() {

		this.spinner.active = true;
		if (this.validate()) {
			this.cpLoading.show();
			this.userService.register(this.formGroup.value)
				.subscribe((res) => {
					this.cpLoading.hide();
					this.spinner.active = false;
					this.cdr.detectChanges();
					this.router.navigate([ROTAS.HOME]);
				}, err => {
					this.cpLoading.hide();
					this.spinner.active = false;
					this.cdr.detectChanges();
				});
		}
	}

	validate() {
		this.authNoticeService.setNotice('');
		if (this.formGroup.valid) {
			return true;
		}

		this.errors = [];

		let nameErrors = this.getFieldErrors('name');
		let emailErrors = this.getFieldErrors('email');
		let passwordErrors = this.getFieldErrors('password');

		if (nameErrors && nameErrors.required) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.FULLNAME') }));
		}

		if (emailErrors) {
			if (emailErrors.email) {
				this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
			}
			if (emailErrors.required) {
				this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
			}
		}

		if (passwordErrors) {

			if (passwordErrors.required) {
				this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
			}
			if (passwordErrors.minlength) {
				this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', {
					name: this.translate.instant('AUTH.INPUT.PASSWORD'),
					min: passwordErrors.minlength.requiredLength
				}));
			}
		}
		
		if (!this.getField('agree').value) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.AGREEMENT_REQUIRED'));
		}

		if (this.errors.length > 0) {
			this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
			this.spinner.active = false;
			this.cdr.detectChanges();
		} 

		return false;
	}
}
