import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModequipoComponent } from './modequipo.component';

describe('ModequipoComponent', () => {
  let component: ModequipoComponent;
  let fixture: ComponentFixture<ModequipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModequipoComponent],
    });
    fixture = TestBed.createComponent(ModequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
