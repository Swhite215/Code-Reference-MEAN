import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Recipe One", "This is recipe number one.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Recipe Two", "This is recipe number two.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Recipe Three", "This is recipe number three.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  ];

  @Output() sendRecipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  handleRecipeSelected(recipe: Recipe) {
    this.sendRecipeSelected.emit(recipe);
  }

}
