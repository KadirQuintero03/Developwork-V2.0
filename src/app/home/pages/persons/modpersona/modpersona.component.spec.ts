import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModpersonaComponent } from './modpersona.component';

describe('ModpersonaComponent', () => {
  let component: ModpersonaComponent;
  let fixture: ComponentFixture<ModpersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModpersonaComponent]
    });
    fixture = TestBed.createComponent(ModpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
