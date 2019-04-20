import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeStartComponent } from "../components/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "../components/recipe-edit/recipe-edit.component";
import { RecipesComponent } from "../components/recipes/recipes.component";
import { RecipeDetailComponent } from "../components/recipe-detail/recipe-detail.component";

const recipeRoutes: Routes = [
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
