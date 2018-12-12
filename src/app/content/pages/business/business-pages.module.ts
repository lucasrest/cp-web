import { NgModule } from "@angular/core";
import { BusinessPagesRoutingModule } from "./business-pages-routing.module";
import { CPProfileComponent } from "./profile/cp-profile.component";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
	imports: [
		CommonModule,
		BusinessPagesRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		FormsModule,
		TranslateModule.forChild()
	],
	declarations: [
		CPProfileComponent
	]
})
export class BusinessPagesModule { }
