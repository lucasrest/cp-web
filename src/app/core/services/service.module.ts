import { NgModule } from "@angular/core";
import { MetronicServiceModule } from "./metronic/metronic-service.module";
import { CommonServiceModule } from "./common/common-service.module";
import { LayoutServiceModule } from "./metronic/layout/layout-service.module";

@NgModule({
   imports: [
       LayoutServiceModule,
       MetronicServiceModule,
       CommonServiceModule
   ]
})
export class ServiceModule {

}