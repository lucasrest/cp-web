import { Unit } from './../../../../../core/models/business/unit';
import { UnitService } from './../../../../../core/services/business/unit.service';
import { ApiResponse } from './../../../../../core/models/api-response';
import { Recipe } from './../../../../../core/models/business/recipe';
import { CpLoadingService } from './../../../../../core/services/common/cp-loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../../core/services/business/recipe.service';
import { CpRoutes } from '../../../../../core/constants/cp-routes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpBaseComponent } from '../../../common/cp-base/cp-base.component';
import { RecipeCategory } from '../../../../../core/models/business/recipecategory';
import { FormArray } from '@angular/forms/src/model';

@Component({
	selector: 'm-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent extends CpBaseComponent implements OnInit {

	private recipe: Recipe;
	categories: RecipeCategory[] = [];
	units: Unit[] = [];

	private paramsSub: any;

	constructor(
		private _service: RecipeService,
		private _router: Router,
		private _formBuilder: FormBuilder,
		private _route: ActivatedRoute,
		private _loading: CpLoadingService,
		private _unitService: UnitService
	) {
		super();
	 }

	ngOnInit() {
		this.formGroup = this._formBuilder.group({
			name: [null, [Validators.required]],
			recipeCategory: [null, [Validators.required]],
			preparationTime: [null, [Validators.required]],
			unityQuantity: [null, [Validators.required]],
			unit: [null, [Validators.required]],
			description: [null, [Validators.required]],
			steps: this._formBuilder.array([this.createStep(1)])
		});

		this.fetchCategories();
		this.fetchUnits();

		this.paramsSub = this._route.params.subscribe(params => {
			let id = +params['id'];
			if (id) {
				this._loading.show();
				this._service.getById(id).subscribe(
					apiResponse => {
						this.recipe = apiResponse.data;
						this.fillForm();
						this._loading.hide();
					},
					error => {
						this._loading.hide();
					}
				);
			}
		});
	}

	fillForm() {

	}

	fetchCategories() {
		this._service.getCategoriesReduced().subscribe(
			(apiResponse: ApiResponse) => {
				this.categories = apiResponse.data;
			},
			(apiResponse: ApiResponse) => {}
		)
	}

	fetchUnits() {
		this._unitService.getReduced().subscribe(
			(apiResponse: ApiResponse) => {
				this.units = apiResponse.data;
			},
			(apiResponse: ApiResponse) => {}
		)
	}

	cancel() {
		this._router.navigate([CpRoutes.RECIPES]);
	}

	//Steps
	private stepControlName: string = "steps";

	createStep(order: number = 1) {
		console.log(order);
		let form = this._formBuilder.group({
			order: [order, [Validators.required]],
			description: [null, [Validators.required]]
		});
		console.log(form.value);
		return form;
	}

	addStep() {
		const control = this.formGroup.controls[this.stepControlName] as FormArray;
		control.push(this.createStep(control.length+1));
	}

	removeStep(index: number) {
		const control = this.formGroup.controls[this.stepControlName] as FormArray;
	}

}
