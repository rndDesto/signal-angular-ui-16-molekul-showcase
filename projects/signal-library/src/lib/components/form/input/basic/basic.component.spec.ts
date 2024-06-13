import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputBasicComponent } from './basic.component';

describe('SignalInputBasicComponent', () => {
  let component: SignalInputBasicComponent;
  let fixture: ComponentFixture<SignalInputBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalInputBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
