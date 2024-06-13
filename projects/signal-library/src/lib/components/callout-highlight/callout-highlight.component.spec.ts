import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutHighlightComponent } from './callout-highlight.component';

describe('CalloutHighlightComponent', () => {
  let component: CalloutHighlightComponent;
  let fixture: ComponentFixture<CalloutHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
