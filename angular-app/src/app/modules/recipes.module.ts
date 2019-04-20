import { NgModule } from "@angular/core";
import { RecipesComponent } from "../components/recipes/recipes.component";
import { RecipeListComponent } from "../components/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "../components/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "../components/recipe-start/recipe-start.component";
import { RecipeItemComponent } from "../components/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "../components/recipe-edit/recipe-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipe-routing.module";
import { SharedDirectiveModule } from "./shared-directive.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedDirectiveModule
  ]
})
export class RecipesModule {}
