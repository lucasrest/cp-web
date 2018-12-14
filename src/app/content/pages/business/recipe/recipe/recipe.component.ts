import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../../core/services/business/recipe.service';

@Component({
  selector: 'm-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
      private _service: RecipeService
  ) { }

  ngOnInit() {
  }

}
