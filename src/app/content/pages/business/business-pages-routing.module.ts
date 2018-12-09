import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '', children: [
            {
                path: '', loadChildren: '../../pages/components/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'ingrediente', loadChildren: './ingredient/ingredient/ingredient.module#IngredientModule'
            },
            {
                path: 'ingredientes', loadChildren: './ingredient/ingredients/ingredients.module#IngredientsModule'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessPagesRoutingModule { }