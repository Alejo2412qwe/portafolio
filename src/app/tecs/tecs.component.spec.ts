import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecsComponent } from './tecs.component';

describe('TecsComponent', () => {
  let component: TecsComponent;
  let fixture: ComponentFixture<TecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecsComponent]
    });
    fixture = TestBed.createComponent(TecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
