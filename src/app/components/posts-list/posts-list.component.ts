import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Array<any>;
  isLoading = true

  constructor( private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPost()
      .then((data: Array<any>) => {
        this.isLoading = false;
        this.posts = data;
      });
  }



}
