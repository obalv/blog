///<reference path="../../../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ConcordanceComponent} from './concordance.component';
import {NavbarStub, ConcordanceStub} from '../../helper/concordance_stub';
import {RouterFragment} from '../../helper/router_fragment_interface';

describe('concordance testing', () => {
  let comp: ConcordanceComponent;
  let fixture: ComponentFixture<ConcordanceComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcordanceComponent],
    });
    fixture = TestBed.createComponent(ConcordanceComponent);
    comp = fixture.componentInstance;
  });

  it('should be navbar if using NavbarStub', () => {
    comp.router_fragments = <RouterFragment>NavbarStub;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('a'));
    expect(de.nativeElement.textContent).toContain(NavbarStub.currentState);
  });
});
