/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideogameListComponent } from './videogame-list.component';

describe('VideogameListComponent', () => {
  let component: VideogameListComponent;
  let fixture: ComponentFixture<VideogameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideogameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
