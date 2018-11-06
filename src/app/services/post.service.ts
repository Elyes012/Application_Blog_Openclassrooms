import { Subject } from 'rxjs/Subject';
import { Post } from '../model/post.model';
export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [
      {
      index: 0,
      title: 'Mon Premier post',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis`,
      created_at: new Date,
      loveIts: 0
      },
      {
      index: 1,
      title: 'Mon deuxiéme post',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis`,
      created_at: new Date,
      loveIts: 0
      },
      {
      index: 2,
      title: 'Encore un post',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis`,
      created_at: new Date,
      loveIts: 0
      }
  ];

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }
  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }

  loveIt(index: number) {
    this.posts[index].loveIts++;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.emitPostsSubject();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.emitPostsSubject();
  }

}
