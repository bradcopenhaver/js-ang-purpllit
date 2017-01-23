import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostsService]
})
export class NewPostComponent implements OnInit {
  newPost = null;
  subId = null;

  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameterArray) => {
      this.subId = parseInt(urlParameterArray['id']);
    });
  }

  newPostForm() {
    this.newPost = true;
  }
  cancel() {
    this.newPost = null;
  }
  addPost(title: string, text: string) {
    var newPost = new Post(title, text, this.subId, this.postService.getNextId());
    this.postService.addNewPost(newPost);
    this.newPost = null;
  }
}
