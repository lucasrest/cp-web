import { NgModule } from "@angular/core";
import { HeaderService } from "./header.service";
import { LayoutRefService } from "./layout-ref.service";
import { MenuAsideService } from "./menu-aside.service";
import { MenuHorizontalService } from "./menu-horizontal.service";
import { SubheaderService } from "./subheader.service";
import { HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { GestureConfig } from "@angular/material";

@NgModule({
    providers: [
        HeaderService,
        LayoutRefService,
        MenuAsideService,
        MenuHorizontalService,
        SubheaderService,
        {
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		}
    ]
})
export class LayoutServiceModule{}