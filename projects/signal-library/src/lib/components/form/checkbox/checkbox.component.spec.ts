import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCheckboxComponent } from './checkbox.component';

describe('SignalCheckboxComponent', () => {
  let component: SignalCheckboxComponent;
  let fixture: ComponentFixture<SignalCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
