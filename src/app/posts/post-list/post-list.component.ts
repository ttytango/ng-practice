import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { Post } from '../post';
import { User } from '../../users/user';
import { map, Observable, take } from 'rxjs';
import { data } from 'autoprefixer';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];
  user = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUser().pipe(
      take(1),
      map((response: User[]) => {
        return response
        }
      )
    ).subscribe(
      data => this.user = data
    )
  }


}
