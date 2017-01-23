import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
  providers: [PostsService]
})
export class ListPostsComponent implements OnInit {
  posts: Post[] = [];
  subpurpllitID: number;

  constructor(private route: ActivatedRoute, private location: Location, private postsService: PostsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.subpurpllitID = parseInt(urlParametersArray['id']);
    });
    this.posts = this.postsService.getPostsBySub(this.subpurpllitID);
  }

}
