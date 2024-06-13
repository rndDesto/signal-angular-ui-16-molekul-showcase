import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSelectcomboComponent } from './selectcombo.component';

describe('SignalSelectcomboComponent', () => {
  let component: SignalSelectcomboComponent;
  let fixture: ComponentFixture<SignalSelectcomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalSelectcomboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSelectcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
