import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticationModule } from './core/auth/authentication.module';
import { NgxPermissionsModule } from 'ngx-permissions';

import { LayoutModule } from './content/layout/layout.module';
import { PartialsModule } from './content/partials/partials.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig, MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import 'hammerjs';
import { AclService } from './core/services/metronic/acl.service';
import { LayoutConfigService } from './core/services/metronic/layout-config.service';
import { LayoutConfigStorageService } from './core/services/metronic/layout-config-storage.service';
import { LayoutRefService } from './core/services/metronic/layout/layout-ref.service';
import { MenuConfigService } from './core/services/metronic/menu-config.service';
import { PageConfigService } from './core/services/metronic/page-config.service';
import { UserService } from './core/services/metronic/user.service';
import { UtilsService } from './core/services/metronic/utils.service';
import { ClassInitService } from './core/services/metronic/class-init.service';
import { MessengerService } from './core/services/metronic/messenger.service';
import { ClipboardService } from './core/services/metronic/clipboard.sevice';
import { LogsService } from './core/services/metronic/logs.service';
import { QuickSearchService } from './core/services/metronic/quick-search.service';
import { DataTableService } from './core/services/metronic/datatable.service';
import { SplashScreenService } from './core/services/metronic/splash-screen.service';
import { SubheaderService } from './core/services/metronic/layout/subheader.service';
import { HeaderService } from './core/services/metronic/layout/header.service';
import { MenuHorizontalService } from './core/services/metronic/layout/menu-horizontal.service';
import { MenuAsideService } from './core/services/metronic/layout/menu-aside.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LayoutModule,
		PartialsModule,
		CoreModule,
		OverlayModule,
		AuthenticationModule,
		NgxPermissionsModule.forRoot(),
		NgbModule.forRoot(),
		TranslateModule.forRoot(),
		MatProgressSpinnerModule,
	],
	providers: [
		AclService,
		LayoutConfigService,
		LayoutConfigStorageService,
		LayoutRefService,
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
		SplashScreenService,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},	
		SubheaderService,
		HeaderService,
		MenuHorizontalService,
		MenuAsideService,
		// template services	
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
