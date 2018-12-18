import { CPCommonComponentsModule } from './../../../components/common/cp-common-components.module';
import { CommonServiceModule } from './../../../../../core/services/common/common-service.module';
import { MatCheckboxModule, MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { LayoutModule } from './../../../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { MetronicCoreModule } from '../../../../../core/metronic/metronic-core.module';
import { PartialsModule } from '../../../../partials/partials.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';

const routes: Routes = [
  {
      path: '',
      component: RecipeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
	MetronicCoreModule,
	LayoutModule,
	PartialsModule,
	AngularEditorModule,
	MatInputModule,
	MatFormFieldModule,
	MatCheckboxModule,
	MatIconModule,
	MatOptionModule,
	MatSelectModule,
	ReactiveFormsModule,
	CommonServiceModule,
	ReactiveFormsModule,
	CPCommonComponentsModule,
	TranslateModule.forChild(),
	RouterModule.forChild(routes),
	NgbTabsetModule
  ],
  declarations: [
    RecipeComponent
  ]
})
export class RecipeModule { }
