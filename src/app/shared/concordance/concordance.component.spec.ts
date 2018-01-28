///<reference path="../../../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ConcordanceComponent} from './concordance.component';
import {NavbarStub, ConcordanceStub} from '../../helper/concordance_stub';

describe('concordance testing', () => {
  let comp: ConcordanceComponent;
  let fixture: ComponentFixture<ConcordanceComponent>;
  let de: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcordanceComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ConcordanceComponent);
    comp = fixture.componentInstance;
  });

  it('should be navbar if using NavbarStub', () => {
    comp.router_fragments = NavbarStub;
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('a'));
    expect(de[0].nativeElement.textContent).toContain(NavbarStub[0].currentState);
    expect(de[1].nativeElement.textContent).toContain(NavbarStub[1].currentState);
  });
});
