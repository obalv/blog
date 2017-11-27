import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() concordancelink: string;
  @Output() pushNavSeg = new EventEmitter<string>();

  getNavSeg(navseg: string) {
    this.pushNavSeg.emit(navseg);
  }
}
