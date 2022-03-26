import { Post } from '../posts/post';

export class User {
  constructor(
    public name: string,
    public posts: Post[],
  ) { }
}
