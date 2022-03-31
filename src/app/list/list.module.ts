import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './safe-html.pipe';
import { NodesComponent } from './nodes/nodes.component';
// import { UtilsModule } from '../common/utils/utils.module';
// import { UtilsModule } from '../common/utils/utils.module';

const dataStructuresRoutes: Routes = [{
  path: '', component: ListComponent,
}]

@NgModule({
 declarations: [
    ListComponent,
    SafeHtmlPipe,
    NodesComponent
  ],
  exports: [
    ListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(dataStructuresRoutes),
  ]
})
export class ListModule { }
