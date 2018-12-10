import { NgModule } from "@angular/core";
import { BusinessPagesRoutingModule } from "./business-pages-routing.module";
import { CPProfileComponent } from "./profile/cp-profile.component";

@NgModule({
  imports: [
	BusinessPagesRoutingModule
  ],
  declarations: [
	  CPProfileComponent
  ]
})
export class BusinessPagesModule { }
