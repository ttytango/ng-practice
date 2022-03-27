import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { Subject, takeUntil } from 'rxjs';
import * as FormStatus from '../form-status';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  posts: Post[] = [];
  private destroy$ = new Subject<boolean>();
  validStatus:
    | FormStatus.VALID
    | FormStatus.INVALID
    | FormStatus.PENDING
    | FormStatus.DISABLED;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      }
    )
    this.postForm.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe( data => this.validStatus = data);
  }

  onSubmit() {
      this.postsService.addPost(this.postForm.value.title, this.postForm.value.content)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => this.postsService.notify(result))
      this.postForm.reset();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  reset() {
    this.postForm.reset();
  }
}
