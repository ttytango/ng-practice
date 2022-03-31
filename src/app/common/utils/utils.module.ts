import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';
import { RouterModule } from '@angular/router';

const uiRoutes = [
  {path: '', component: UiComponent}
]

@NgModule({
	declarations: [
		UiComponent,
	],
	exports: [
	],
	imports: [
		CommonModule,
		RouterModule.forChild(uiRoutes),
	]
})
export class UtilsModule { }
