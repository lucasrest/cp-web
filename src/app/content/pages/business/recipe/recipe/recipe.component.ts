import { Recipe } from './../../../../../core/models/business/recipe';
import { CpLoadingService } from './../../../../../core/services/common/cp-loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RecipeService } from '../../../../../core/services/business/recipe.service';
import { CpRoutes } from '../../../../../core/constants/cp-routes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpBaseComponent } from '../../../common/cp-base/cp-base.component';

@Component({
	selector: 'm-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent extends CpBaseComponent implements OnInit {

	private recipe: Recipe;
	categories: any[] = []; //TODO: model

	private paramsSub: any;

	constructor(
		_cdr: ChangeDetectorRef,
		_loading: CpLoadingService,
		private _service: RecipeService,
		private _router: Router,
		private _formBuilder: FormBuilder,
		private _route: ActivatedRoute,
	) {
		super(_loading, _cdr);
	 }

	ngOnInit() {
		this.formGroup = this._formBuilder.group({
			name: [null, [Validators.required]],
			recipeCategory: [null, [Validators.required]],
			unityQuantity: [null, [Validators.required]],
			unit: [null, [Validators.required]],
			description: [null, [Validators.required]]
		});

		this.fetchCategories();

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

	fetchCategories(): any {
		throw new Error("Method not implemented.");
	}

	cancel() {
		this._router.navigate([CpRoutes.RECIPES]);
	}

}
