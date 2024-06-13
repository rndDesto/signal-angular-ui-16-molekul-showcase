import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCountdownComponent } from './countdown.component';

describe('SignalCountdownComponent', () => {
  let component: SignalCountdownComponent;
  let fixture: ComponentFixture<SignalCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
