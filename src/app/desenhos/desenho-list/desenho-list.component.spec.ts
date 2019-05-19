/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesenhoListComponent } from './desenho-list.component';

describe('DesenhoListComponent', () => {
  let component: DesenhoListComponent;
  let fixture: ComponentFixture<DesenhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
