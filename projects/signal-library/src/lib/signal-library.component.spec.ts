import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLibraryComponent } from './signal-library.component';

describe('SignalLibraryComponent', () => {
  let component: SignalLibraryComponent;
  let fixture: ComponentFixture<SignalLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
