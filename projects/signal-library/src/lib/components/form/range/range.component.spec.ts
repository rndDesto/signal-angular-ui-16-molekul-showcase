import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRangeComponent } from './range.component';

describe('SignalRangeComponent', () => {
  let component: SignalRangeComponent;
  let fixture: ComponentFixture<SignalRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
