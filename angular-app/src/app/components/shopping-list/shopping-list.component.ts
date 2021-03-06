import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";
import { ShoppingService } from "src/app/services/shopping.service";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      newIngredients => (this.ingredients = newIngredients)
    );
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
}
