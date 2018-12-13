import { Router, ActivatedRoute } from '@angular/router';
import { UnitService } from './../../../../../core/services/business/unit.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../../../../core/models/business/ingredient';
import { CpBaseComponent } from '../../../common/cp-base/cp-base.component';
import { Unit } from '../../../../../core/models/business/unit';
import { IngredientCategory } from '../../../../../core/models/business/ingredientcategory';
import { IngredientService } from '../../../../../core/services/business/ingredient.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { CpLoadingService } from '../../../../../core/services/common/cp-loading.service';
import { CPLocalStorageService } from '../../../../../core/services/common/cp-localstorage.service';

@Component({
	selector: 'm-ingredient',
	templateUrl: './ingredient.component.html',
	styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent extends CpBaseComponent implements OnInit, OnDestroy {

	ingredient: Ingredient;

	units: Unit[] = [];
	categories: IngredientCategory[] = [];

	private paramsSub: any;

	constructor(
		private _service: IngredientService,
		private _unitService: UnitService,
		private _toast: ToastrService,
		private _formBuilder: FormBuilder,
		private _loading: CpLoadingService,
		private _router: Router,
		private _localStorage: CPLocalStorageService,
		private _route: ActivatedRoute
	) {
		super();
	}

	ngOnInit() {
		this.formGroup = this._formBuilder.group({
			name: [null, [
				Validators.required
			]],
			ingredientCategory: [null, [
				Validators.required
			]],
			unit: [null, [
				Validators.required
			]],
			description: [null, []]
		});

		this.fetchCategories();
		this.fetchUnits();

		this.paramsSub = this._route.params.subscribe(params => {
			let id = +params['id'];
			if(id) {
				this._loading.show();
				this._service.getById(id).subscribe(
					apiResponse => {
						this.ingredient = apiResponse.data[0];
						this.formGroup.setValue({
							name: this.ingredient.name,
							ingredientCategory: this.ingredient.ingredientCategory,
							unit: this.ingredient.unit,
							description: this.ingredient.description
						});
						this._loading.hide();
					},
					error => {
						this._loading.hide();
					}
				);
			}
		});
	}

	ngOnDestroy(): void {
		this.paramsSub.unsubscribe();
	}

	save() {
		this._loading.show();
		this.formGroup.value.user = this._localStorage.getToken().user;
		if(this.ingredient && this.ingredient.id) {
			this.formGroup.value.id = this.ingredient.id;
			this._service.update(this.formGroup.value).subscribe(
				apiResponse => {
					this._loading.hide();
					this._toast.success('Feito!');
					this._router.navigate(['/app/ingredientes']);
				},
				error => {
					this._loading.hide();
				}
			);
		} else {
			this._service.insert(this.formGroup.value).subscribe(
				apiResponse => {
					this._loading.hide();
					this._toast.success('Feito!');
					this._router.navigate(['/app/ingredientes']);
				},
				error => {
					this._loading.hide();
					console.log(error);
				}
			);
		}
	}

	cancel() {
		this._router.navigate(['/app/ingredientes']);
	}

	fetchCategories() {
		this._service.getCategoriesReduced().subscribe(
			apiResponse => {
				this.categories = apiResponse.data;
			},
			error => {}
		)
	}

	fetchUnits() {
		this._unitService.getReduced().subscribe(
			apiResponse => {
				this.units = apiResponse.data;
			},
			error => {}
		)
	}

}
