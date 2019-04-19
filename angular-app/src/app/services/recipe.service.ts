import { Recipe } from "../models/recipe.model";

import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Chicken Kiev",
      "A delicious 30-minute chicken dinner.",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Chicken_Kiev_-_Ukrainian_East_Village_restaurant.jpg",
      [
        new Ingredient("chicken", 4),
        new Ingredient("garlic", 2),
        new Ingredient("parsley", 1)
      ]
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return [...this.recipes][id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes = [...this.recipes, recipe];
    this.recipesChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(i: number) {
    this.recipes = this.recipes.map((recipe, index) => {
      if (index != i) {
        return recipe;
      }
    });

    this.recipesChanged.next([...this.recipes]);
  }
}
