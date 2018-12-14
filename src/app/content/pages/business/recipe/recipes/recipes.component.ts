import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../../core/services/business/recipe.service';
import { ApiResponse } from '../../../../../core/models/api-response';
import { RecipeDTO } from '../../../../../core/models/business/dto/recipe-dto';
import { CpLoadingService } from '../../../../../core/services/common/cp-loading.service';
import { Router } from '@angular/router';
import { CPROUTES } from '../../../../../core/constants/cp-routes';

@Component({
    selector: 'm-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

    recipes: RecipeDTO[];
    
    constructor(
        private _service: RecipeService,
        private _loading: CpLoadingService,
        private _router: Router
    ) { }
        
    ngOnInit() {
        this.fetchRecipes();
    }
        
    fetchRecipes(): any {
        this._loading.show();
        this._service.get().subscribe(
            (apiResponse: ApiResponse) => {
                this.recipes = apiResponse.data;
                this._loading.hide();
            },
            error => {
                this._loading.hide();
            }
        )
    }

    new() {
		this._router.navigate([CPROUTES.RECIPE])
	}

	edit(id: number) {
		this._router.navigate([CPROUTES.RECIPE, id])
	}
        
}
    