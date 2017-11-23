import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-concordance',
  templateUrl: './concordance.component.html',
  styleUrls:['./concordance.component.css']
})
export class ConcordanceComponent {
  @Input() postlink;
  @Input() type;
}