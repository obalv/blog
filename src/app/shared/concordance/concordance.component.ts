import {Component, Input, Output, EventEmitter} from '@angular/core';

import {PostService} from '../../post/post.service';

@Component({
  selector: 'app-concordance',
  templateUrl: './concordance.component.html',
  styleUrls: ['./concordance.component.css']
})
export class ConcordanceComponent {
  @Input() postlink: string;
  @Input() type: string;
  @Output() pushPostSeg = new EventEmitter<any>();

  getPostSeg(t: string, p: string) {
    this.pushPostSeg.emit({type: t, postid: p});
  }
}
