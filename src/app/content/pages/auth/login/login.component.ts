import {
	Component,
	OnInit,
	Output,
	Input,
	ViewChild,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	HostBinding
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as objectPath from 'object-path';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerButtonOptions } from '../../../partials/content/general/spinner-button/button-options.interface';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { AuthNoticeService } from '../../../../core/auth/auth-notice.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ROTAS } from '../../../../core/constants/rotas';
import { CPLocalStorageService } from '../../../../core/services/common/cp-localstorage.service';
import { CpLoadingService } from '../../../../core/services/common/cp-loading.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'm-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {

	@HostBinding('class') classes: string = 'm-login__signin';

	@Output() actionChange = new Subject<string>();

	@Input() action: string;

	public loading = false;

	formGroup: FormGroup;

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
		private router: Router,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private cdr: ChangeDetectorRef,
		private authService: AuthService,
		private storageService: CPLocalStorageService,
		private formBuilder: FormBuilder,
		private _loading: CpLoadingService,
		private _toast: ToastrService
	) {

		this.formGroup = this.formBuilder.group({
			email: ['lucasrest@hotmail.com', [
				Validators.required,
				Validators.email
			]],
			password: ['123', [
				Validators.required,
				//TODO Remover após adaptar senha default na API
				//Validators.minLength(6)
			]]
		});

	}

	login() {
		this.spinner.active = true;
		this._loading.show();
		if (this.validate()) {
			this.authService.authenticate(this.formGroup.value)
				.subscribe((res) => {
					this.storageService.setToken(res.data);
					this.router.navigate([ROTAS.HOME]);
					this.spinner.active = false;
					this._loading.hide();
					this.cdr.detectChanges();
				}, err => {
					this.spinner.active = false;
					this._loading.hide();
					this._toast.error(err.error);
					this.authNoticeService.setNotice(err.error, 'error');
					this.cdr.detectChanges();
				});
		}
	}

	ngOnInit(): void {
		// demo message to show
		if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = ``;
			this.authNoticeService.setNotice(initialNotice, 'success');
		}
	}

	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
	}

	validate() {
		if (this.formGroup.valid) {
			return true;
		}

		this.errors = [];

		let emailErrors = this.formGroup.get('email').errors;
		let passwordErrors = this.formGroup.get('password').errors;
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
				this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
			}
			if (passwordErrors.minlength) {
				this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', {
					name: this.translate.instant('AUTH.INPUT.PASSWORD'),
					min: passwordErrors.minlength.requiredLength
				}));
			}
		}
		if (this.errors.length > 0) {
			this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
			this.spinner.active = false;
		}

		return false;
	}

	forgotPasswordPage(event: Event) {
		this.action = 'forgot-password';
		this.actionChange.next(this.action);
	}

	register(event: Event) {
		this.action = 'register';
		this.actionChange.next(this.action);
	}
}
