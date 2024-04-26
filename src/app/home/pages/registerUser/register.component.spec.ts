import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registerComponent } from './register.component';

describe('registerComponent', () => {
  let component: registerComponent;
  let fixture: ComponentFixture<registerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [registerComponent]
    });
    fixture = TestBed.createComponent(registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
