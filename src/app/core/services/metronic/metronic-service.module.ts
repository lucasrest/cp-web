import { NgModule } from "@angular/core";
import { AclService } from "./acl.service";
import { MenuConfigService } from "./menu-config.service";
import { PageConfigService } from "./page-config.service";
import { UserService } from "./user.service";
import { UtilsService } from "./utils.service";
import { ClassInitService } from "./class-init.service";
import { MessengerService } from "./messenger.service";
import { ClipboardService } from "./clipboard.sevice";
import { LogsService } from "./logs.service";
import { QuickSearchService } from "./quick-search.service";
import { DataTableService } from "./datatable.service";
import { SplashScreenService } from "./splash-screen.service";
import { LayoutConfigService } from "./layout-config.service";
import { LayoutConfigStorageService } from "./layout-config-storage.service";

@NgModule({
    providers: [
        AclService,
		LayoutConfigService,
		LayoutConfigStorageService,
		MenuConfigService,
		PageConfigService,
		UserService,
		UtilsService,
		ClassInitService,
		MessengerService,
		ClipboardService,
		LogsService,
		QuickSearchService,
		DataTableService,
		SplashScreenService
    ]
})
export class MetronicServiceModule { }