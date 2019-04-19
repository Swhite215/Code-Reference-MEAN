import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../models/recipe.model";
import { Ingredient } from "src/app/models/ingredient.model";
import { ShoppingService } from "src/app/services/shopping.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];

      let selectedRecipe = this.recipeService.getRecipeById(this.id);

      this.recipe = selectedRecipe;
    });
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addToShoppingList(ingredients);
    this.router.navigate(["/shopping"]);
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }
}
