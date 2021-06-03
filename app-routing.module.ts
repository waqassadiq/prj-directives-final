import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeListComponent } from "src/app/recipes/recipe-list/recipe-list.component";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // without pathMatchFull, it won't be able to load the redirect page
    { path: 'recipes', component: RecipeListComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}