import { NgModule } from "@angular/core";
import { IngredientsComponent } from "./ingredients.component";
import { CommonModule } from "@angular/common";
import { MetronicCoreModule } from "../../../../../core/metronic/metronic-core.module";
import { LayoutModule } from "../../../../layout/layout.module";
import { PartialsModule } from "../../../../partials/partials.module";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { MatListModule, MatCardModule, MatIconModule, MatDividerModule } from "@angular/material";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: IngredientsComponent
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
        IngredientsComponent
    ]
})
export class IngredientsModule { }