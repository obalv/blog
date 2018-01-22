import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {FooterComponent} from './footer.component';

describe('FooterComponent testing', () => {
  let comp: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let de: DebugElement;
  let el_h1: HTMLElement;
  let el_p: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.queryAll(By.css('p'));
    el_h1 = de[0].nativeElement;
    el_p = de[1].nativeElement;
  });

  it('should have h1', () => {
    expect(el_h1.textContent).toContain('everything is nothing');
  });

  it('should have p', () => {
    expect(el_p.textContent).toContain('Copyright@Feature. All Rights Reserved');
  });
});
