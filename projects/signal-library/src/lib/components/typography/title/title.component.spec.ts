import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTitleComponent } from './title.component';

describe('SignalTitleComponent', () => {
  let component: SignalTitleComponent;
  let fixture: ComponentFixture<SignalTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
