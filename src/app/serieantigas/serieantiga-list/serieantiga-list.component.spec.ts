/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerieantigaListComponent } from './serieantiga-list.component';

describe('SerieantigaListComponent', () => {
  let component: SerieantigaListComponent;
  let fixture: ComponentFixture<SerieantigaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieantigaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieantigaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
