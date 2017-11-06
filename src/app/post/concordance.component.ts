import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PostListService} from './post-list.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-concordance',
  templateUrl: './concordance.component.html'
})
export class ConcordanceComponent implements OnInit {

  postlist: string[];

  constructor(private postListService: PostListService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.postListService.fetchPosts(true, undefined).subscribe(

      )
    }
  }
}
