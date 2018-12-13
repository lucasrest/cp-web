import { NgModule } from "@angular/core";

import { IngredientService } from './ingredient.service';
import { RegionService } from './region.service';
import { UnitService } from './unit.service';

@NgModule({
  imports: [
  ],
  providers: [
    IngredientService,
    UnitService,
    RegionService
  ]
})
export class BusinessServiceModule { }
