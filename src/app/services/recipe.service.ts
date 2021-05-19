import { 
  Injectable, 
  EventEmitter } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Shawarma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Doe', 3),
      new Ingredient('Meat', 1),
    ]),
    new Recipe('Burger', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Potato', 3),
    ])
    
  ];

  getRecipies(){
    return this.recipes.slice();
  }

  constructor() { }
}
