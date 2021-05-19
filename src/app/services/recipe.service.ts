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
    new Recipe('Shawarma', 'This is simply a test', 'https://image.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg',
    [
      new Ingredient('Bread', 2),
      new Ingredient('Meat', 4),
    ]),
    new Recipe('Burger', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
    [
      new Ingredient('Buns', 1),
      new Ingredient('Tomatoes', 1),
    ])
    
  ];

  getRecipies(){
    return this.recipes.slice();
  }

  constructor() { }
}
