import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../../core/models/business/ingredient';
import { CpBaseComponent } from '../../../common/cp-base/cp-base.component';
import { Unit } from '../../../../../core/models/business/unit';
import { IngredientCategory } from '../../../../../core/models/business/ingredientcategory';

@Component({
  selector: 'm-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent extends CpBaseComponent implements OnInit {

  ingredient: Ingredient;

  units: Unit[] = [
    { id: 1, name: 'unit 1'},
    { id: 2, name: 'unit 2'}
  ];

  categories: IngredientCategory[] = [
    { id: 1, name: 'category 1'},
    { id: 2, name: 'category 2'}
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
