import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalOtpComponent } from './otp.component';

describe('SignalOtpComponent', () => {
  let component: SignalOtpComponent;
  let fixture: ComponentFixture<SignalOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
