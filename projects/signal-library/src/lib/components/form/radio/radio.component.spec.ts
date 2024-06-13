import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRadioComponent } from './radio.component';

describe('SignalRadioComponent', () => {
  let component: SignalRadioComponent;
  let fixture: ComponentFixture<SignalRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
