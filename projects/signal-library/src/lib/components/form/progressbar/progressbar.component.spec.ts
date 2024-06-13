import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalProgressBarComponent } from './progressbar.component';

describe('SignalProgressBarComponent', () => {
  let component: SignalProgressBarComponent;
  let fixture: ComponentFixture<SignalProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
