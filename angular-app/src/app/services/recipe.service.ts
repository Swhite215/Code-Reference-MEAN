import { Recipe } from "../models/recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Chicken Kiev",
      "A delicious 30-minute chicken dinner.",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Chicken_Kiev_-_Ukrainian_East_Village_restaurant.jpg"
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
