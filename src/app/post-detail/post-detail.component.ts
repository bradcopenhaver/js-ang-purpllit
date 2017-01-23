import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostsService]
})
export class PostDetailComponent implements OnInit {
  postId: number = null;
  postToDisplay: Post;
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameterArray) => {
      this.postId = parseInt(urlParameterArray['id']);
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
  }

}
