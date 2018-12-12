import { ApiResponse } from './../../../../../core/models/api-response';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../../../../core/services/business/ingredient.service';
import { IngredientDTO } from '../../../../../core/models/business/dto/ingredient-dto';
import { CpLoadingService } from '../../../../../core/services/common/cp-loading.service';

@Component({
  selector: 'm-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

	ingredients: IngredientDTO[];

	constructor(
		private _service: IngredientService,
		private _loading: CpLoadingService
	) { }

	ngOnInit() {
		this.fetchIngredients();
	}

	fetchIngredients() {
		this._loading.show();
		this._service.get().subscribe((apiResponse: ApiResponse) => {
			this.ingredients = apiResponse.data;
			this._loading.hide();
		},
		(apiResponse: ApiResponse) => {
			this._loading.hide();
		});
	}

}
