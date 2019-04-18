import { Recipe } from "../models/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Chicken Kiev",
      "A delicious 30-minute chicken dinner.",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Chicken_Kiev_-_Ukrainian_East_Village_restaurant.jpg"
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return [...this.recipes];
  }
}
