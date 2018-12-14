import { NgModule } from "@angular/core";

import { IngredientService } from './ingredient.service';
import { RegionService } from './region.service';
import { UnitService } from './unit.service';
import { RecipeService } from "./recipe.service";

@NgModule({
  imports: [
  ],
  providers: [
    IngredientService,
    UnitService,
    RegionService,
    RecipeService
  ]
})
export class BusinessServiceModule { }
