import {Component, Input} from '@angular/core';

import {RouterFragment} from '../../helper/router_fragment_interface';

@Component({
  selector: 'app-concordance',
  templateUrl: './concordance.component.html',
  styleUrls: ['./concordance.component.css']
})
export class ConcordanceComponent {
  @Input() router_fragments: RouterFragment[];
}
