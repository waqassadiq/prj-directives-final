import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
   ingredientsChanged = new EventEmitter<Ingredient[]>();

private   ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient){
    console.log("addIngredients()...");
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addToShoppingList(ingredients: Ingredient[]){
    console.log("ingredients;;;; " + ingredients);
    this.ingredients.push(ingredients[0]);
    this.ingredients.push(ingredients[1]);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
