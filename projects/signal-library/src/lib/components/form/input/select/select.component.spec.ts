import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBasicComponent } from './select.component';

describe('SelectBasicComponent', () => {
  let component: SelectBasicComponent;
  let fixture: ComponentFixture<SelectBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
