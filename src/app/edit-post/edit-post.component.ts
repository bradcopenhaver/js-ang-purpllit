import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input() currentPost: Post;

  selectedPost = null;

  editPost(){
    this.selectedPost = true;
  }

  finishedEditing(){
    this.selectedPost = null;
  }

  constructor() { }



  ngOnInit() {
  }

}
