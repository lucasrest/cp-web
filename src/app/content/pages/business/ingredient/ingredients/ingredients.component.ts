import { ApiResponse } from './../../../../../core/models/api-response';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../../../../core/services/business/ingredient.service';
import { IngredientDTO } from '../../../../../core/models/business/dto/ingredient-dto';

@Component({
  selector: 'm-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

	ingredients: IngredientDTO[];

	constructor(
		private _service: IngredientService
	) { }

	ngOnInit() {
		this.fetchIngredients();
	}

	fetchIngredients() {
		this._service.get().subscribe((apiResponse: ApiResponse) => {
			this.ingredients = apiResponse.data;
		},
		(apiResponse: ApiResponse) => {
			let errors = apiResponse.errors;
		});
	}

}
