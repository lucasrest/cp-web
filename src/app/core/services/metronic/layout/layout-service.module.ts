import { NgModule } from "@angular/core";
import { HeaderService } from "./header.service";
import { LayoutRefService } from "./layout-ref.service";
import { MenuAsideService } from "./menu-aside.service";
import { MenuHorizontalService } from "./menu-horizontal.service";
import { SubheaderService } from "./subheader.service";

@NgModule({
    providers: [
        HeaderService,
        LayoutRefService,
        MenuAsideService,
        MenuHorizontalService,
        SubheaderService
    ]
})
export class LayoutServiceModule{}