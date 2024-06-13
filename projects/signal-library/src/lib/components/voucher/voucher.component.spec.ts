import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalVoucherComponent } from './voucher.component';

describe('SignalVoucherComponent', () => {
  let component: SignalVoucherComponent;
  let fixture: ComponentFixture<SignalVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
