import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambContraComponent } from './camb-contra.component';

describe('CambContraComponent', () => {
  let component: CambContraComponent;
  let fixture: ComponentFixture<CambContraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambContraComponent],
    });
    fixture = TestBed.createComponent(CambContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
