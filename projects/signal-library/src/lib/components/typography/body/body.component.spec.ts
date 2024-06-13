import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBodyComponent } from './body.component';

describe('SignalBodyComponent', () => {
  let component: SignalBodyComponent;
  let fixture: ComponentFixture<SignalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
