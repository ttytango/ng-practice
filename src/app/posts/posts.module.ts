import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const postRoutes = [
  {path: '', component: PostsComponent}
]

@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule

  ]
})
export class PostsModule { }
