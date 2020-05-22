import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudymaterialComponent } from './studymaterial.component';

describe('StudymaterialComponent', () => {
  let component: StudymaterialComponent;
  let fixture: ComponentFixture<StudymaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudymaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudymaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
