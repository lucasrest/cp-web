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
import { MetronicCoreModule } from './core/metronic/metronic-core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig, MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AclService } from './core/metronic/services/acl.service';
import { LayoutConfigService } from './core/metronic/services/layout-config.service';
import { LayoutRefService } from './core/metronic/services/layout/layout-ref.service';
import { MenuConfigService } from './core/metronic/services/menu-config.service';
import { PageConfigService } from './core/metronic/services/page-config.service';
import { UserService } from './core/metronic/services/user.service';
import { UtilsService } from './core/metronic/services/utils.service';
import { ClassInitService } from './core/metronic/services/class-init.service';
import { MessengerService } from './core/metronic/services/messenger.service';
import { ClipboardService } from './core/metronic/services/clipboard.sevice';
import { LogsService } from './core/metronic/services/logs.service';
import { QuickSearchService } from './core/metronic/services/quick-search.service';
import { DataTableService } from './core/metronic/services/datatable.service';
import { SplashScreenService } from './core/metronic/services/splash-screen.service';
import { LayoutConfigStorageService } from './core/metronic/services/layout-config-storage.service';
import { SubheaderService } from './core/metronic/services/layout/subheader.service';
import { HeaderService } from './core/metronic/services/layout/header.service';
import { MenuHorizontalService } from './core/metronic/services/layout/menu-horizontal.service';
import { MenuAsideService } from './core/metronic/services/layout/menu-aside.service';

import 'hammerjs';
import { CoreModule } from './core/core.module';
import { MetronicServiceModule } from './core/metronic/services/metronic-service.module';



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
		MetronicServiceModule,
		OverlayModule,
		AuthenticationModule,
		NgxPermissionsModule.forRoot(),
		NgbModule.forRoot(),
		TranslateModule.forRoot(),
		MatProgressSpinnerModule,
	],
	providers: [
		
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
