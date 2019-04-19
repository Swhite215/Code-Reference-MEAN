import { Ingredient } from "../models/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient("apple", 10),
    new Ingredient("cake", 1)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  getIngredientByIndex(index: number) {
    return [...this.ingredients][index];
  }

  updatedIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
