import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { ProfileComponent } from './header/profile/profile.component';
import { MetronicCoreModule } from '../../core/metronic/metronic-core.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { InnerComponent } from './components/inner/inner.component';
import { IngredientComponent } from './business/ingredient/ingredient/ingredient.component';
import { IngredientsComponent } from './business/ingredient/ingredients/ingredients.component';

@NgModule({
	declarations: [
		PagesComponent,
		ProfileComponent,
		ErrorPageComponent,
		InnerComponent,
		IngredientComponent,
		IngredientsComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		PagesRoutingModule,
		MetronicCoreModule,
		LayoutModule,
		PartialsModule,
		AngularEditorModule,
	],
	providers: []
})
export class PagesModule {
}
