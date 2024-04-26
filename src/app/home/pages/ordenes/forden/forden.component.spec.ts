import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordenComponent } from './forden.component';

describe('FordenComponent', () => {
  let component: FordenComponent;
  let fixture: ComponentFixture<FordenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FordenComponent]
    });
    fixture = TestBed.createComponent(FordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
