import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipesModule } from "./modules/recipes.module";

import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./components/shopping-list-edit/shopping-list-edit.component";
import { HeaderComponent } from "./layout/header.component";
import { BasicHighlightDirective } from "./directives/basic-highlight.directive";
import { BetterHighlightDirective } from "./directives/better-highlight.directive";
import { UnlessDirective } from "./directives/unless.directive";
import { DropDownDirective } from "./directives/dropdown.directive";
import { ShoppingService } from "./services/shopping.service";
import { RecipeService } from "./services/recipe.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DataStorageService } from "./services/data-storage.service";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { SharedDirectiveModule } from "./modules/shared-directive.module";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RecipesModule,
    AppRoutingModule,
    SharedDirectiveModule
  ],
  providers: [
    ShoppingService,
    RecipeService,
    DataStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
