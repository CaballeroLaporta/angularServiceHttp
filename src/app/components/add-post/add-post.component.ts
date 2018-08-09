import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title = '';
  body = '';
  message = '';

  constructor( private postService: PostsService ) { }

  ngOnInit() {
  }

  submitForm(form) {
    let title = this.title;
    let body = this.body;
    this.publicPost({ title, body, userId: 1})
  }

  publicPost(post) {
    this.postService.createPost(post)
      .then((data: Object) => {
        console.log('data', data);
        this.message = 'created';
      })
  }

}
