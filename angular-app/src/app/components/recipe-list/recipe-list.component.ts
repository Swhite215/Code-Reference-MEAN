import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../models/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeToRender = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Chicken Kiev",
      "A delicious 30-minute chicken dinner.",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Chicken_Kiev_-_Ukrainian_East_Village_restaurant.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  recipeSelected(recipe: Recipe) {
    this.recipeToRender.emit(recipe);
  }
}
