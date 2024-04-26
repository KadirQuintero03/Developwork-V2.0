import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesMComponent } from './ordenes-m.component';

describe('OrdenesMComponent', () => {
  let component: OrdenesMComponent;
  let fixture: ComponentFixture<OrdenesMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenesMComponent]
    });
    fixture = TestBed.createComponent(OrdenesMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
