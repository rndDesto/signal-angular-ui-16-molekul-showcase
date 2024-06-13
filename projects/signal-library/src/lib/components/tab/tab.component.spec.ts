import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTabComponent } from './tab.component';

describe('SignalTabComponent', () => {
  let component: SignalTabComponent;
  let fixture: ComponentFixture<SignalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
