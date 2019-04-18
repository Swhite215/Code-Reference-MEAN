import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../models/recipe.model";
import { Ingredient } from "src/app/models/ingredient.model";
import { ShoppingService } from "src/app/services/shopping.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router
  ) {}

  ngOnInit() {}

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addToShoppingList(ingredients);
    this.router.navigate(["/shopping"]);
  }
}
