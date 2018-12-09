import { NgModule } from "@angular/core";
import { IngredientComponent } from "./ingredient.component";
import { CommonModule } from "@angular/common";
import { MetronicCoreModule } from "../../../../../core/metronic/metronic-core.module";
import { PartialsModule } from "../../../../partials/partials.module";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { MatListModule, MatCardModule, MatDividerModule, MatIconModule } from "@angular/material";
import { LayoutModule } from "../../../../layout/layout.module";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: IngredientComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        MetronicCoreModule,
		LayoutModule,
		PartialsModule,
		AngularEditorModule,
		MatListModule,
		MatCardModule,
		MatDividerModule,
        MatIconModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        IngredientComponent
    ]
})
export class IngredientModule { }