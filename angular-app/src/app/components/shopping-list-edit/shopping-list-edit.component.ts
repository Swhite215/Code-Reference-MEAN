import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";
import { ShoppingService } from "../../services/shopping.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const name = value.name;
    const amount = value.amount;
    const ingredient = new Ingredient(name, amount);

    this.shoppingService.addIngredient(ingredient);
  }
}
