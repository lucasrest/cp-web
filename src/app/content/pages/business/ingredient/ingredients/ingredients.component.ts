import { ApiResponse } from './../../../../../core/models/api-response';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../../../../core/services/business/ingredient.service';
import { IngredientDTO } from '../../../../../core/models/business/dto/ingredient-dto';
import { CpLoadingService } from '../../../../../core/services/common/cp-loading.service';
import { Router } from '@angular/router';
import { CpRoutes } from '../../../../../core/constants/cp-routes';
import { CPLocalStorageService } from '../../../../../core/services/common/cp-localstorage.service';
import { CpFilter } from '../../../../../core/models/common/filter';

@Component({
	selector: 'm-ingredients',
	templateUrl: './ingredients.component.html',
	styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

	ingredients: IngredientDTO[];

	constructor(
		private _service: IngredientService,
		private _loading: CpLoadingService,
		private _localStorage: CPLocalStorageService,
		private _router: Router
	) { }

	ngOnInit() {
		this.fetchIngredients();
	}

	fetchIngredients() {
		this._loading.show();
		this._service.getByUser(this._localStorage.getLoggedUser().id)
			.subscribe((apiResponse: ApiResponse) => {
				this.ingredients = apiResponse.data;
			}, (apiResponse: ApiResponse) => {
			}, () => {
				this._loading.hide();
			});
	}

	new() {
		this._router.navigate([CpRoutes.INGREDIENT])
	}

	edit(id: number) {
		this._router.navigate([CpRoutes.INGREDIENT, id])
	}

}
