import {Component, OnInit} from '@angular/core';

import {PostService} from './post.service';

@Component({
  templateUrl: `./post.component.html`,
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private getPost: PostService) {
  }

  ngOnInit() {
    this.getPost.fetchPosts(true,undefined);
  }
}
