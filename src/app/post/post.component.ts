import {Component, OnInit} from '@angular/core';

import {PostService} from './post.service';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  navbarlist: any = [];

  constructor(private getPost: PostService) {
  }

  ngOnInit() {
    this.getPost.fetchConcordanceLink().subscribe(list => this.navbarlist.push(list.data));
  }
}
