import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoptionComponent } from './selectoption.component';

describe('SelectoptionComponent', () => {
  let component: SelectoptionComponent;
  let fixture: ComponentFixture<SelectoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
