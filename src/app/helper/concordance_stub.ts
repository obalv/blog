import {RouterFragment} from './router_fragment_interface';

export const NavbarStub: RouterFragment[] = [
  {currentState: 'js', passId: 1},
  {currentState: 'python', passId: 1},
];

export const ConcordanceStub: RouterFragment[] = [
  {currentState: 'hello js', previousState: 'js', hasTitle: 'hello js', hasExcerpt: 'blabla', passId: 11},
  {currentState: 'goodbye js', previousState: 'js', hasTitle: 'goodbye js', hasExcerpt: 'bilibili', passId: 12},
  {currentState: 'hello python', previousState: 'python', hasTitle: 'hello python', hasExcerpt: 'bobo', passId: 21},
  {currentState: 'goodbye python', previousState: 'python', hasTitle: 'goodbye python', hasExcerpt: 'popo', passId: 22},
];
