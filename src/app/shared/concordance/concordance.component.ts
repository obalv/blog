import {Component, Input, Output, EventEmitter} from '@angular/core';

import {PostService} from '../../post/post.service';

import {RouterFragment} from '../../helper/router_fragment_interface';

@Component({
  selector: 'app-concordance',
  templateUrl: './concordance.component.html',
  styleUrls: ['./concordance.component.css']
})
export class ConcordanceComponent {
  @Input() router_fragments: RouterFragment[];
}
