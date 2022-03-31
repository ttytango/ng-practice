import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinarysearchtreeComponent } from './binarysearchtree/binarysearchtree.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const bstRoutes: Routes = [{
  path: '', component: BinarysearchtreeComponent,
}]

@NgModule({
  declarations: [
    BinarysearchtreeComponent,
  ],
  exports: [
    BinarysearchtreeComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(bstRoutes),
  ]
})


export class BstModule { }
