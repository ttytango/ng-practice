import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { Post } from './post';
import { environment } from '../../environments/environment';
import { DBUtils } from '../common/utils/db-utils';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];

  subject: Subject<any> = new Subject();
  obs: Observable<any> = this.subject.asObservable();
  url: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  notify = (data: any) => {
    this.subject.next(data)
  }


  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'posts');
  }

  public addPost(title: string, content: string) {
    return this.http.post<Post[]>(this.url + 'posts',  {
      "userId": "neo3d2m",
      "id": DBUtils.generateId(this.posts),
      "title": title,
      "content": content,
    }).pipe(
        map((response) => {
          return this.posts = response
        })
      )
  }

  public deleteOnePost(id: string) {
      return this.http.delete<Post[]>(this.url + 'posts' + `/${id}`)
        .pipe(
          map((response) => {
            return response
          })
        )
  }

}
