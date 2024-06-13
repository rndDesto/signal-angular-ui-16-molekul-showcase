import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSwitchComponent } from './switch.component';

describe('SignalSwitchComponent', () => {
  let component: SignalSwitchComponent;
  let fixture: ComponentFixture<SignalSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
