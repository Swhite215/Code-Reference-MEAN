import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}

  renderRecipeDetails(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
