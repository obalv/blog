import { Component, OnInit } from '@angular/core';

import { PostListService } from './post-list.service';

@Component({
    selector: 'concordance',
    templateUrl: './concordance.component.html';
})
export class ConcordanceComponent implements OnInit {
    constructor(private postListService: PostListService) { }

    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.

    }
}
