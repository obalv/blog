import {Directive} from '@angular/core';

import {RouterFragment} from './router_fragment_interface';

export const NavbarStub: RouterFragment = {currentState: 'python', passId: 1};

export const ConcordanceStub: RouterFragment = {
  currentState: 'hello js', previousState: 'js',
  hasTitle: 'hello js', hasExcerpt: 'blabla', passId: 11
};


// @Directive({
//   selector: '[routerLink]',
// })
// export class ConcordanceRouterStub {
//
// }
