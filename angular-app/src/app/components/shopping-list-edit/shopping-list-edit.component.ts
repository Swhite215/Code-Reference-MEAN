import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";
import { ShoppingService } from "../../services/shopping.service";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputReference: ElementRef;
  @ViewChild("amountInput") amountInputReference: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  onAddItem() {
    let name = this.nameInputReference.nativeElement.value;
    let amount = this.amountInputReference.nativeElement.value;
    const ingredient = new Ingredient(name, amount);

    this.shoppingService.addIngredient(ingredient);
  }
}
