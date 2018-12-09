import { NgModule } from "@angular/core";

import { APIClientService } from './api-client.service';
import { CPLocalStorageService } from "./cp-localstorage.service";
import { CpLoadingService } from "./cp-loading.service";

@NgModule({
  imports: [
  ],
  providers: [
    APIClientService,
	CPLocalStorageService,
	CpLoadingService
  ]
})
export class CommonServiceModule { }
