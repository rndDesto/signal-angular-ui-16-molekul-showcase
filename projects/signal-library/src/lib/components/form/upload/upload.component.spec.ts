import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalUploadComponent } from './upload.component';

describe('SignalUploadComponent', () => {
  let component: SignalUploadComponent;
  let fixture: ComponentFixture<SignalUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
