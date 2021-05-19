import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    console.log("ShoppingListComponent ngOnInit()...");

    this.ingredients = this.shoppingService.getIngredients().slice();

    this.shoppingService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[])=>{
          console.log("ShoppingListComponent subscripe()...");
          this.ingredients = ingredients;
        }
    );
  }
}
