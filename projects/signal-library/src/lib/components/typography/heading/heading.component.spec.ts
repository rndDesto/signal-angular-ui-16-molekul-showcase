import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalHeadingComponent } from './heading.component';

describe('SignalHeadingComponent', () => {
  let component: SignalHeadingComponent;
  let fixture: ComponentFixture<SignalHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
