import { NgModule } from "@angular/core";

import { APIClientService } from './api-client.service';
import { CPLocalStorageService } from "./cp-localstorage.service";

@NgModule({
  imports: [
  ],
  providers: [
    APIClientService,
    CPLocalStorageService
  ]
})
export class CommonServiceModule { }
