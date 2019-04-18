import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../models/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeToRender = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeSelected(recipe: Recipe) {
    this.recipeToRender.emit(recipe);
  }
}
