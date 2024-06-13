import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeviceComponent } from './card-device.component';

describe('CardDeviceComponent', () => {
  let component: CardDeviceComponent;
  let fixture: ComponentFixture<CardDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDeviceComponent]
    });
    fixture = TestBed.createComponent(CardDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
