import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-list/post-item/post-item.component';

const postRoutes = [
  {path: '', component: PostsComponent}
]

@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent,
    PostListComponent,
    PostItemComponent,
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
