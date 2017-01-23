import { Injectable } from '@angular/core';
import {Post} from './post.model';
import {POSTS} from './posts';

@Injectable()
export class PostsService {

  constructor() { }

  getAllPosts() {
    return POSTS;
  }

  getPostsBySub(subpurpllit: number) {
    var output: Post[] = [];
    for (var i = 0; i<POSTS.length; i++) {
      if (POSTS[i].subpurpllitId === subpurpllit) {
        output.push(POSTS[i]);
      }
    }
    return output;
  }

  getPostById(postId: number){
    return POSTS[postId - 1];
  }
  getNextId(){
    return POSTS.length + 1;
  }
  addNewPost(newPost:Post){
    POSTS.push(newPost);
  }
}
