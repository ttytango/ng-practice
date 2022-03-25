import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { map, Subject, Subscription, takeUntil } from 'rxjs';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  private destroy$ = new Subject<boolean>();
  subOne: Subscription;
  subTwo: Subscription;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.updateList();
    this.subOne = this.postsService.obs.subscribe(
    () => this.updateList()
    )
  }
  updateList() {
    this.subTwo = this.postsService.getPosts()
      .pipe(takeUntil(this.destroy$), map(response => {
        this.posts = response
      })).subscribe();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.subOne.unsubscribe();
  }


}
