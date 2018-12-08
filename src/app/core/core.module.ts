import { NgModule } from "@angular/core";
import { CommonServiceModule } from "./services/common/common-service.module";
import { MetronicCoreModule } from "./metronic/metronic-core.module";

@NgModule({
    imports: [
        MetronicCoreModule,
        CommonServiceModule
    ]
})
export class CoreModule {}