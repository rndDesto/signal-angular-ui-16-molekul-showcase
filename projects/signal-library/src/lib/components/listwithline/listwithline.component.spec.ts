import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalListwithlineComponent } from './listwithline.component';

describe('SignalListwithlineComponent', () => {
  let component: SignalListwithlineComponent;
  let fixture: ComponentFixture<SignalListwithlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalListwithlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalListwithlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
