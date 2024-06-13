import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTextareaComponent } from './textarea.component';

describe('SignalTextareaComponent', () => {
  let component: SignalTextareaComponent;
  let fixture: ComponentFixture<SignalTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
