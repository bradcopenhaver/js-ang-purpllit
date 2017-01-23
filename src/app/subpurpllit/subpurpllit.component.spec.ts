/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubpurpllitComponent } from './subpurpllit.component';

describe('SubpurpllitComponent', () => {
  let component: SubpurpllitComponent;
  let fixture: ComponentFixture<SubpurpllitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpurpllitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpurpllitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
