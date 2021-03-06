import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../post';
import { Subject, takeUntil } from 'rxjs';
import { PostsService } from '../../posts.service';
import { User } from '../../../users/user';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit, OnDestroy {

  @Input() post: Post;
  @Input() user: User;
  private destroy$ = new Subject<boolean>();

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
  }

  deletePost(id: string) {
    this.postsService.deleteOnePost(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => this.postsService.notify(result))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
