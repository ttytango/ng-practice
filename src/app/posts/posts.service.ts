import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Post } from './post';
import { environment } from '../../environments/environment';

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

  /*
    Generate random, unique id strings based on input array.
    Can be moved to a shared utils class
  */
  public generateId(inputArray): string {
    let tempId: string = Math.random().toString(36).substring(2, 7);
    if (inputArray.length === 0) {
      return tempId;
    }
    return Array.from(inputArray.id).find(item => item === tempId) ?  this.generateId(inputArray) : tempId;
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'posts');
  }

  public addPost(title: string, content: string) {
    return this.http.post<Post[]>(this.url + 'posts',  {
      "id": this.generateId(this.posts),
      "title": title,
      "content": content,
    }).pipe(
        map((response) => {
          return this.posts = response
        })
      )
  }

}
