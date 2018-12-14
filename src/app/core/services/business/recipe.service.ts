import { Injectable } from "@angular/core";
import { APIClientService } from "../common/api-client.service";
import { ApiResponse } from "../../models/api-response";
import { Observable } from "rxjs";
import { ENDPOINTS } from "../../constants/endpoints";

@Injectable()
export class RecipeService {

    constructor(
        private _apiClient: APIClientService
    ){
    }

    get(): Observable<ApiResponse> {
        return this._apiClient.get(ENDPOINTS.BUSINESS.RECIPES);
    }

}