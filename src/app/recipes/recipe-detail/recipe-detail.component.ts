import { Component, OnInit, Input } from '@angular/core';
import { ignoreElements } from 'rxjs-compat/operator/ignoreElements';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  OnClickToShoppinhList(recipe: Recipe){
    this.shoppingService.addToShoppingList(recipe.ingredients);
  }

  OnAddToShoppinhList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
