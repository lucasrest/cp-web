import { UnitService } from './unit.service';
import { IngredientService } from './ingredient.service';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
  ],
  providers: [
	IngredientService,
	UnitService
  ]
})
export class BusinessServiceModule { }
