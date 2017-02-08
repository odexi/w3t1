/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaplayerComponent } from './mediaplayer.component';

describe('MediaplayerComponent', () => {
  let component: MediaplayerComponent;
  let fixture: ComponentFixture<MediaplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
