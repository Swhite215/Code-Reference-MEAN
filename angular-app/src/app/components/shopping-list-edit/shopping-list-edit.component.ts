import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputReference: ElementRef;
  @ViewChild("amountInput") amountInputReference: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    let name = this.nameInputReference.nativeElement.value;
    let amount = this.amountInputReference.nativeElement.value;
    const ingredient = new Ingredient(name, amount);

    this.ingredientAdded.emit(ingredient);
  }
}
