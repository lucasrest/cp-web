import { ENDPOINTS } from './../../constants/endpoints';
import { Injectable } from '@angular/core';
import { APIClientService } from '../common/api-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { Ingredient } from '../../models/business/ingredient';
import { IngredientDTO } from '../../models/business/dto/ingredient-dto';
import { ApiResponse } from '../../models/api-response';

@Injectable()
export class IngredientService {

	constructor(
		private _apiService: APIClientService
	) {
	}

	public get(): Observable<ApiResponse> {
		return this._apiService.get(ENDPOINTS.BUSINESS.INGREDIENTS);
	}

}
