import { NgModule } from "@angular/core";
import { BusinessPagesRoutingModule } from "./business-pages-routing.module";
import { CPProfileComponent } from "./profile/cp-profile.component";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  imports: [
	BusinessPagesRoutingModule,
	MatFormFieldModule,
	MatInputModule,
	ReactiveFormsModule,
	FormsModule
  ],
  declarations: [
	  CPProfileComponent
  ]
})
export class BusinessPagesModule { }
