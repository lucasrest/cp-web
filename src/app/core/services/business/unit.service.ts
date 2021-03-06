import { ApiResponse } from './../../models/api-response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { APIClientService } from '../common/api-client.service';
import { ENDPOINTS } from '../../constants/endpoints';

@Injectable()
export class UnitService {

	constructor(
		private _apiService: APIClientService
	) {
	}

	public getReduced(): Observable<ApiResponse> {
		return this._apiService.get(ENDPOINTS.BUSINESS.UNITS_REDUCED)
	}

}
